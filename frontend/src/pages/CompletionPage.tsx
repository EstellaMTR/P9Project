import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Avatar, Box, Button, LinearProgress, Typography } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import CelebrationIcon from '@mui/icons-material/Celebration';
import {
  getLessonById, getLessonCourseByCourseId, getCourseEmployeeByCourseIdEmployeeId,
  getEmployeeById, getLeaderboard,
} from '../api';
import ProgressBar from '../components/ProgressBar';
import XpProgressBar from '../components/XpProgressBar';
import { readFeedback } from '../feedbackSession';
import '../styles/CompletionPage.css';

type CompletionData = {
  title: string;
  courseId: number;
  percent: number;
  nextId?: number;
  name: string;
  xp: number;
  rank: number;
  completed: boolean;
};

export default function CompletionPage({ employeeId }: { employeeId: number }) {
  const [searchParams] = useSearchParams();
  const lessonId = Number(searchParams.get('lessonId'));
  const [data, setData] = useState<CompletionData | null>(null);
  const [error, setError] = useState('');
  const receipt = readFeedback(employeeId, lessonId);

  useEffect(() => {
    const controller = new AbortController();
    async function loadCompletion() {
      try {
        if (!Number.isInteger(lessonId) || lessonId <= 0) throw new Error('Invalid lesson');
        const options = { signal: controller.signal, throwOnError: true as const };
        const { data: lesson } = await getLessonById({ ...options, path: { id: lessonId } });
        const [lessonsResult, progressResult, employeeResult, leaderboardResult] = await Promise.all([
          getLessonCourseByCourseId({ ...options, path: { courseId: lesson.courseId } }),
          getCourseEmployeeByCourseIdEmployeeId({ ...options, path: { courseId: lesson.courseId, employeeId } }),
          getEmployeeById({ ...options, path: { id: employeeId } }),
          getLeaderboard(options),
        ]);
        const lessons = [...lessonsResult.data].sort((a, b) => (a.id ?? 0) - (b.id ?? 0));
        const completedIds = new Set(progressResult.data.filter((item) => item.isCompleted).map((item) => item.lessonId));
        const completedCount = lessons.filter((item) => item.id !== undefined && completedIds.has(item.id)).length;
        const currentIndex = lessons.findIndex((item) => item.id === lessonId);
        const laterLessons = lessons.slice(currentIndex + 1);
        // Prefer the next unfinished lesson; reviews can still move through completed lessons.
        const nextLesson = laterLessons.find((item) => item.id !== undefined && !completedIds.has(item.id))
          ?? lessons.find((item) => item.id !== undefined && !completedIds.has(item.id))
          ?? laterLessons[0];
        const employee = employeeResult.data;
        if (!controller.signal.aborted) {
          setData({
            title: lesson.title, courseId: lesson.courseId,
            percent: lessons.length ? Math.round(completedCount / lessons.length * 100) : 0,
            nextId: nextLesson?.id,
            name: `${employee.firstName} ${employee.lastName}`.trim(), xp: employee.xpAccumulated,
            rank: leaderboardResult.data.findIndex((item) => item.employeeId === employeeId) + 1,
            completed: completedIds.has(lessonId),
          });
        }
      } catch {
        if (!controller.signal.aborted) setError('Could not load lesson completion. Please try refreshing.');
      }
    }
    void loadCompletion();
    return () => controller.abort();
  }, [employeeId, lessonId]);

  return (
    <Box className="completion-page" sx={{ bgcolor: 'background.default' }}>
      <Box component="main" className="completion-content">
        {error ? <Typography role="alert">{error}</Typography> : !data ? (
          <Typography role="status">Loading completion…</Typography>
        ) : !data.completed ? (
          <>
            <Typography>This lesson has not been completed yet.</Typography>
            <Button component={Link} to={`/feedback?lessonId=${lessonId}`}>Back to feedback</Button>
          </>
        ) : (
          <>
            <ProgressBar activeStep={2} />
            <Typography component="h1">CONGRATULATIONS!</Typography>
            <Typography component="h2">You just completed the “{data.title}” lesson!</Typography>
            <Box className="completion-course-progress">
              <Typography><strong>{data.percent}%</strong> of course is completed</Typography>
              <LinearProgress variant="determinate" value={data.percent} color="success" aria-label="Course completion" />
            </Box>
            <Box className="completion-celebration" aria-label="Congratulations!">
              <CelebrationIcon sx={{ color: 'warning.main' }} />
              <span aria-hidden="true">✦</span><span aria-hidden="true">✧</span>
            </Box>
            <Box className="completion-stats">
              <Box>
                <Typography component="h3">{receipt?.completionXp !== undefined ? `You gained +${receipt.completionXp} XP!` : 'Your XP progress'}</Typography>
                <XpProgressBar currentXp={data.xp % 100} targetXp={100} level={Math.floor(data.xp / 100)} />
              </Box>
              <Box>
                <Typography component="h3">Your position on the leaderboard</Typography>
                <Box className="completion-rank-card">
                  <Avatar>{data.name.charAt(0)}</Avatar>
                  <Box className="completion-rank-name">
                    <strong>{data.name} (You)</strong>
                    <span>Level {Math.floor(data.xp / 100)}</span>
                  </Box>
                  <strong>{data.rank > 0 ? `#${data.rank}` : '—'}</strong>
                </Box>
              </Box>
            </Box>
            <Box className="completion-actions">
              <Button component={Link} to="/" color="secondary" startIcon={<HomeIcon />}>Home</Button>
              <Button component={Link} to={data.nextId !== undefined ? `/lesson?lessonId=${data.nextId}` : `/course?courseId=${data.courseId}`} color="warning">
                {data.nextId !== undefined ? 'Next Lesson' : 'Back to Course'}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </Box>
  );
}
