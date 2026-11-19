import { Box, Button, Typography } from '@mui/material';
import NavigationSidebar from '../components/NavigationSidebar';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  getCourseByCourseId,
  getCourseEmployee,
  getCourseEmployeeByCourseIdEmployeeId,
  getLessonCourseByCourseId,
  updateCourseEmployee,
  type Lesson,
  type LessonEmployeeDto,
} from '../api';
import '../styles/CoursePage.css';
import lessonLine from '../assets/Line 8.svg';
import completionSquare from '../assets/Competion-Square.svg';

type CoursePageProps = {
  employeeId: number;
};

export default function CoursePage({ employeeId }: CoursePageProps) {
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [lessonProgress, setLessonProgress] = useState<LessonEmployeeDto[]>([]);
  const [rewardClaimed, setRewardClaimed] = useState(false);
  const [courseReward, setCourseReward] = useState(25);
  const [rewardError, setRewardError] = useState('');

  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get('courseId'));
  console.log(id);

  useEffect(() => {
    let active = true;
    async function loadCourse() {
      const { data: course } = await getCourseByCourseId({
        path: { id },
        throwOnError: true,
      });
      setCourseName(course.title);
      setCourseDescription(course.description);
      setCourseReward(course.xpReward);
      const { data: lessons } = await getLessonCourseByCourseId({
        path: { courseId: id },
        throwOnError: true,
      });

      const { data: progress } = await getCourseEmployeeByCourseIdEmployeeId({
        path: { courseId: id, employeeId },
        throwOnError: true,
      });
      setLessons(lessons);
      setLessonProgress(progress);
      const { data: enrollments } = await getCourseEmployee({ path: { employeeId }, throwOnError: true });
      if (!active) return;
      const enrollment = enrollments.find((item) => item.courseId === id);
      const allCompleted = lessons.length > 0 && lessons.every((lesson) =>
        progress.some((item) => item.lessonId === lesson.id && item.isCompleted));
      // CourseStatus: InProgress = 1, Finished = 2. The backend awards the reward once.
      if (enrollment?.status !== 2 && allCompleted) {
        if (!enrollment || enrollment.status === 0) {
          await updateCourseEmployee({ body: { courseId: id, employeeId, newStatus: 1 }, throwOnError: true });
        }
        await updateCourseEmployee({ body: { courseId: id, employeeId, newStatus: 2 }, throwOnError: true });
        if (active) setRewardClaimed(true);
      } else {
        setRewardClaimed(enrollment?.status === 2);
      }
    }

    void loadCourse().catch(() => {
      if (active) setRewardError('Could not confirm the course reward. Please refresh to try again.');
    });
    return () => { active = false; };
  }, [id, employeeId]);

  const orderedLessons = [...lessons].sort((a, b) => (a.id ?? 0) - (b.id ?? 0));
  const completedLessonIds = new Set(lessonProgress.filter((item) => item.isCompleted).map((item) => item.lessonId));
  const nextLesson = orderedLessons.find((lesson) => lesson.id !== undefined && !completedLessonIds.has(lesson.id));
  const targetLesson = nextLesson ?? orderedLessons[0];
  const hasCompletedLessons = lessons.some((lesson) => lesson.id !== undefined && completedLessonIds.has(lesson.id));

  return (
    <>
      <Box
        className="course-page"
        sx={{ backgroundColor: 'background.default' }}
      >
        <Box
          className="course-frame"
          sx={{ backgroundColor: 'background.inner' }}
        >
          <div className="course-navigation">
            <NavigationSidebar defaultExpanded={false} />
          </div>

          <Box
            component="main"
            className="course-content"
            sx={{ bgcolor: 'rgba(255, 255, 255, 0.65)' }}
          >
            <Typography component="h1" variant="h2" className="course-title">
              {courseName}
            </Typography>
            <Box
              className="course-description"
              sx={{ bgcolor: 'background.inner' }}
            >
              <Typography component="p" variant="body1">
                {courseDescription}
              </Typography>
            </Box>
            <Box className="course-lessons">
              {orderedLessons.map((lesson, index) => {
                const isCompleted = lessonProgress.some(
                  (record) =>
                    record.lessonId === lesson.id && record.isCompleted,
                );

                return (
                  <Box
                    component={Link}
                    to={`/lesson?lessonId=${lesson.id}`}
                    key={lesson.id}
                    className="course-lesson"
                    sx={{
                      borderColor: 'secondary.main',
                      bgcolor: isCompleted ? '#C8E2C8' : 'background.inner',
                    }}
                  >
                    <img
                      src={lessonLine}
                      className="course-lesson-line"
                      alt=""
                      aria-hidden="true"
                    />
                    <Typography
                      className="course-lesson-number"
                      variant="body2"
                    >
                      Lesson {index + 1}
                    </Typography>
                    <Typography className="course-lesson-title" variant="body2">
                      {lesson.title}
                    </Typography>
                    {isCompleted && (
                      <Box
                        className="course-lesson-check"
                        aria-label="Completed"
                        sx={{ bgcolor: 'success.main', color: '#C8E2C8' }}
                      >
                        ✓
                      </Box>
                    )}
                  </Box>
                );
              })}
              <Box className={`course-completion${rewardClaimed ? ' course-completion--claimed' : ''}`}>
                {rewardClaimed ? (
                  <>
                    <span className="course-claimed-diamond" aria-hidden="true" />
                    <span className="course-claimed-text">REWARD CLAIMED<strong>+{courseReward} XP</strong></span>
                    <span className="course-reward-check" aria-hidden="true">✓</span>
                    <span className="course-reward-label">Earned once · No more course XP</span>
                  </>
                ) : <img src={completionSquare} className="completion-square" alt="Course completion reward" />}
              </Box>
            </Box>
            {rewardError && <Typography role="alert" sx={{ fontSize: 14, textAlign: 'center' }}>{rewardError}</Typography>}
            {targetLesson?.id !== undefined && (
              <Box className="course-action">
                <Button component={Link} to={`/lesson?lessonId=${targetLesson.id}`}>
                  {!nextLesson ? 'Review Course' : hasCompletedLessons ? 'Continue Course' : 'Start Course'}
                </Button>
              </Box>
            )}
          </Box>
        </Box>
      </Box>
    </>
  );
}
