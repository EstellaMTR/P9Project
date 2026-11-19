import { Box, Container, Typography, Button, Stack } from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import UndoIcon from '@mui/icons-material/Undo';
import lessonDescriptionIcon from '/src/assets/lessonDescriptionIcon.svg';
import ProgressBar from '../components/ProgressBar';
import BackgroundLayout from '../components/BackgroundLayout';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { getCourseByCourseId, getLessonById, type Lesson } from '../api';
import ReactMarkdown from 'react-markdown';
import '../styles/LessonPage.css';

/* Lesson Page, also the first step after the Course Page.
 * The content for Page is hardcoded in at the moment,
 * but should be changed once the lesson pages has been made in the backend.
 */

type LessonPageProps = {
  onLogout: () => void;
};

export default function LessonPage({ onLogout }: LessonPageProps) {
  const [searchParams] = useSearchParams();
  const lessonId = Number(searchParams.get('lessonId'));
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [courseTitle, setCourseTitle] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    async function loadLesson() {
      try {
        const { data } = await getLessonById({
          path: { id: lessonId },
          signal: controller.signal,
          throwOnError: true,
        });
        if (!controller.signal.aborted) {
          setLesson(data);
        }
        const { data: course } = await getCourseByCourseId({
          path: { id: data.courseId },
          signal: controller.signal,
        });
        if (!controller.signal.aborted) {
          setCourseTitle(course?.title ?? 'Back to course');
        }
      } catch {
        if (!controller.signal.aborted) {
          setError('Could not load this lesson.');
        }
      }
    }
    void loadLesson();
    return () => controller.abort();
  }, [lessonId]);

  if (error) {
    return (
      <BackgroundLayout onLogout={onLogout} className="lesson-page">
        <Typography role="alert">{error}</Typography>
      </BackgroundLayout>
    );
  }

  if (!lesson) {
    return (
      <BackgroundLayout onLogout={onLogout} className="lesson-page">
        <Typography>Loading lesson…</Typography>
      </BackgroundLayout>
    );
  }

  return (
    <BackgroundLayout onLogout={onLogout} className="lesson-page">
      <Button component={Link} to={`/course?courseId=${lesson.courseId}`} className="lesson-back-button" aria-label="Back to course">
        <UndoIcon />
      </Button>
      <Button
        component={Link}
        to={`/course?courseId=${lesson.courseId}`}
        className="lesson-course-button"
        title={courseTitle || 'Back to course'}
      >
        {courseTitle || 'Back to course'}
      </Button>
      <Container
        className="lesson-content"
        maxWidth="lg"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2,
        }}
      >
        {/* Progress bar*/}
        <ProgressBar activeStep={1} />

        <Typography variant="h1">{lesson.title}</Typography>

        {/* Lesson box */}
        <Box
          className="lesson-label"
          sx={{
            backgroundColor: 'background.default',
            borderRadius: '8px',
            paddingX: 2,
          }}
        >
          <Typography variant="body1">
            {' '}
            <strong>LESSON</strong>
          </Typography>
        </Box>

        {/*Lesson description icon*/}
        <Box
          component="img"
          src={lessonDescriptionIcon}
          className="lessonDescriptionIcon"
          alt=""
          sx={{
            height: 'clamp(60px,12vh, 160px)',
            width: 'auto',
            maxWidth: '100%',
          }}
        />

        {/*Lesson box decription*/}
        <Box
          className="lesson-description-panel"
          sx={{
            backgroundColor: 'background.default',
            borderRadius: 1,
            padding: 'clamp(12px, 2dvh, 24px)',
          }}
        >
          <Box className="lesson-description">
            <ReactMarkdown>{lesson.description}</ReactMarkdown>
          </Box>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button
            component={Link}
            to={`/course?courseId=${lesson.courseId}`}
            variant="contained"
            color="secondary"
            startIcon={<ArrowBack />}
          >
            Go back
          </Button>
          <Button
            component={Link}
            to={`/task?lessonId=${lessonId}`}
            variant="contained"
            color="secondary"
            startIcon={<ArrowForward />}
          >
            Continue
          </Button>
        </Stack>
      </Container>
    </BackgroundLayout>
  );
}
