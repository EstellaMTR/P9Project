import { Box, Button, Stack, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import UndoIcon from '@mui/icons-material/Undo';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useRef, useState } from 'react';
import { getCourseEmployeeByCourseIdEmployeeId, updateThumbCountByLessonIdEmployeeId } from '../api';
import BackgroundLayout from '../components/BackgroundLayout';
import ProgressBar from '../components/ProgressBar';
import { feedbackKey, readFeedback } from '../feedbackSession';
import '../styles/LessonPage.css';
import '../styles/FeedbackPage.css';

type FeedbackPageProps = {
  employeeId: number;
  onLogout: () => void;
};

export default function FeedbackPage({ employeeId, onLogout }: FeedbackPageProps) {
  const navigate = useNavigate();
  const finishPending = useRef(false);
  const [isFinishing, setIsFinishing] = useState(false);
  const [finishError, setFinishError] = useState('');
  const [searchParams] = useSearchParams();
  const lessonId = Number(searchParams.get('lessonId'));
  const result = Number.isInteger(lessonId) && lessonId > 0
    ? readFeedback(employeeId, lessonId) : null;

  async function finishSession() {
    if (!result || finishPending.current) return;
    finishPending.current = true;
    setIsFinishing(true);
    setFinishError('');
    try {
      const { data: records } = await getCourseEmployeeByCourseIdEmployeeId({
        path: { courseId: result.courseId, employeeId },
        throwOnError: true,
      });
      const record = records.find((item) => item.lessonId === lessonId);
      if (!record) throw new Error('Missing lesson attempt');
      const thumbs = Math.min(3, result.feedback.filter((item) => item.met).length);
      if (!record.isCompleted) {
        await updateThumbCountByLessonIdEmployeeId({
          path: { lessonId, employeeId },
          query: { thumbCount: thumbs },
          throwOnError: true,
        });
      }
      const completed = { ...result, completionXp: record.isCompleted ? 0 : thumbs * 10 };
      // The backend has already saved completion; caching must not undo that success.
      try {
        sessionStorage.setItem(feedbackKey(employeeId, lessonId), JSON.stringify(completed));
      } catch { /* Completion can still be loaded from the backend. */ }
      navigate(`/lesson-completion?lessonId=${lessonId}`);
    } catch {
      setFinishError('Could not finish this lesson. Please try again.');
    } finally {
      finishPending.current = false;
      setIsFinishing(false);
    }
  }

  if (!result) {
    return (
      <BackgroundLayout onLogout={onLogout} className="lesson-page feedback-page">
        <Typography role="alert">No feedback is available in this session. Submit your prompt from the task page first.</Typography>
        <Button component={Link} to={lessonId > 0 ? `/task?lessonId=${lessonId}` : '/'}>Go back</Button>
      </BackgroundLayout>
    );
  }

  return (
    <BackgroundLayout onLogout={onLogout} className="lesson-page feedback-page">
      <Button component={Link} to={`/task?lessonId=${lessonId}`} className="lesson-back-button" aria-label="Back to task">
        <UndoIcon />
      </Button>
      <Button component={Link} to={`/course?courseId=${result.courseId}`} className="lesson-course-button">
        {result.courseTitle || 'Back to course'}
      </Button>
      <Box component="main" className="feedback-content">
        <ProgressBar activeStep={2} />
        <Typography component="h1">{result.lessonTitle}</Typography>
        <Box className="lesson-label"><Typography component="span" sx={{ fontWeight: 700 }}>LESSON</Typography></Box>
        <Box component="section" className="feedback-prompt" aria-labelledby="your-prompt-title">
          <Typography component="h2" id="your-prompt-title">Your Prompt</Typography>
          <Typography component="p">{result.answer}</Typography>
        </Box>
        <Box component="section" className="feedback-panel" aria-labelledby="feedback-title">
          <Typography component="h2" id="feedback-title">Feedback</Typography>
          <ul>
            {result.feedback.map((item, index) => (
              <li key={index}>
                {item.met
                  ? <ThumbUpIcon sx={{ color: 'success.main' }} titleAccess="Positive feedback" />
                  : <ThumbDownIcon sx={{ color: 'error.main' }} titleAccess="Constructive feedback" />}
                <span>{item.feedback}</span>
              </li>
            ))}
          </ul>
        </Box>
        <Stack direction="row" spacing={3} className="feedback-actions">
          <Button component={Link} to={`/try-again-task?lessonId=${lessonId}`} color="warning">Try again</Button>
          <form onSubmit={(event) => { event.preventDefault(); void finishSession(); }}>
            <Button type="submit" disabled={isFinishing} className="feedback-finish">
              {isFinishing ? 'Finishing…' : 'Finish Session'}
            </Button>
          </form>
        </Stack>
        {finishError && <Typography role="alert">{finishError}</Typography>}
      </Box>
    </BackgroundLayout>
  );
}
