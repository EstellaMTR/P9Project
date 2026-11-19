import { useState, useEffect } from 'react';
import { Link, useNavigate, useSearchParams } from 'react-router-dom';
import {
  type Lesson,
  getLessonById,
  getCourseByCourseId,
  getFeedback,
} from '../api';
import BackgroundLayout from '../components/BackgroundLayout';
import { Box, Button, TextField, Typography } from '@mui/material';
import ProgressBar from '../components/ProgressBar';
import UndoIcon from '@mui/icons-material/Undo';
import lessonIcon from '../assets/Lesson.svg';
import taskIcon from '../assets/Task.svg';
import '../styles/LessonPage.css';
import '../styles/TaskPage.css';
import ReactMarkdown from 'react-markdown';
import { feedbackKey, type FeedbackSession } from '../feedbackSession';

type TaskPageProps = {
  employeeId: number;
  onLogout: () => void;
};

export default function TaskPage({ employeeId, onLogout }: TaskPageProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const lessonId = Number(searchParams.get('lessonId'));
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [courseTitle, setCourseTitle] = useState('');
  const [error, setError] = useState('');

  const [answer, setAnswer] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  useEffect(() => {
    const controller = new AbortController();
    async function loadLesson() {
      if (!Number.isInteger(lessonId) || lessonId <= 0) {
        setError('Invalid lesson ID.');
        return;
      }
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

  async function handleSubmit() {
    if (!answer.trim() || isSubmitting || !lesson) return;

    setIsSubmitting(true);
    setSubmitError('');

    try {
      const { data, error } = await getFeedback({
        query: {
          taskAnswer: answer,
          lessonId,
          employeeId,
        },
      });

      if (!data) {
        setSubmitError(
          error?.detail ?? 'Could not get feedback. Please try again.',
        );
        return;
      }

      const result: FeedbackSession = {
        lessonTitle: lesson.title,
        courseTitle,
        courseId: lesson.courseId,
        answer,
        feedback: data,
      };
      sessionStorage.setItem(feedbackKey(employeeId, lessonId), JSON.stringify(result));
      navigate(`/feedback?lessonId=${lessonId}`);
    } catch {
      setSubmitError('Could not connect. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

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
    <BackgroundLayout onLogout={onLogout} className="lesson-page task-page">
      <Button
        component={Link}
        to={`/lesson?lessonId=${lessonId}`}
        className="task-back-button"
        aria-label="Back to lesson"
      >
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
      <Box component="main" className="task-content">
        <Box component="header" className="task-header">
          <ProgressBar activeStep={1} />
          <Typography component="h1">{lesson.title}</Typography>
        </Box>

        <Box className="task-columns">
          <Box
            component="section"
            className="task-lesson-panel"
            aria-labelledby="task-lesson-heading"
          >
            <Typography component="h2" id="task-lesson-heading">
              Lesson
              <img
                src={lessonIcon}
                className="task-heading-icon"
                alt=""
                aria-hidden="true"
              />
            </Typography>
            <ReactMarkdown>{lesson.description}</ReactMarkdown>
          </Box>

          <form
            className="task-answer-column"
            onSubmit={(event) => {
              event.preventDefault();
              void handleSubmit();
            }}
          >
            <Box
              component="section"
              className="task-instructions-panel"
              aria-labelledby="task-instructions-heading"
            >
              <Typography component="h2" id="task-instructions-heading">
                Task
                <img
                  src={taskIcon}
                  className="task-heading-icon"
                  alt=""
                  aria-hidden="true"
                />
              </Typography>
              <ReactMarkdown>{lesson.task}</ReactMarkdown>
            </Box>
            <TextField
              multiline
              minRows={4}
              value={answer}
              onChange={(event) => setAnswer(event.target.value)}
              disabled={isSubmitting}
              placeholder="Write your prompt here"
              aria-label="Your task answer"
              className="task-answer-input"
              fullWidth
            />
            <Button
              className="task-submit"
              type="submit"
              disabled={!answer.trim() || isSubmitting}
            >
              {isSubmitting ? 'Getting feedback…' : 'Submit prompt'}
            </Button>
            {submitError && <p role="alert">{submitError}</p>}

          </form>
        </Box>
      </Box>
    </BackgroundLayout>
  );
}
