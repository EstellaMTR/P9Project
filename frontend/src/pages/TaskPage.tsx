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
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import lessonIcon from '../assets/Lesson.svg';
import taskIcon from '../assets/Task.svg';
import '../styles/LessonPage.css';
import '../styles/TaskPage.css';
import ReactMarkdown from 'react-markdown';
import { feedbackKey, readFeedback, type FeedbackSession } from '../feedbackSession';
import '../styles/FeedbackPage.css';
import '../styles/RetryLessonPage.css';

type TaskPageProps = {
  employeeId: number;
  onLogout: () => void;
  retry?: boolean;
};

export default function TaskPage({ employeeId, onLogout, retry = false }: TaskPageProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const lessonId = Number(searchParams.get('lessonId'));
  const [lesson, setLesson] = useState<Lesson | null>(null);
  const [courseTitle, setCourseTitle] = useState('');
  const [error, setError] = useState('');

  const [previousAttempt] = useState(() => retry ? readFeedback(employeeId, lessonId) : null);
  const [answer, setAnswer] = useState(() => previousAttempt?.answer ?? '');
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
    <BackgroundLayout onLogout={onLogout} className={`lesson-page task-page${retry ? ' retry-page' : ''}`}>
      <Button
        component={Link}
        to={retry ? `/feedback?lessonId=${lessonId}` : `/lesson?lessonId=${lessonId}`}
        className="task-back-button"
        aria-label={retry ? 'Back to feedback' : 'Back to lesson'}
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
          {retry ? (
            <Box className="retry-review-column">
              <details className="task-lesson-panel retry-lesson">
                <summary>
                  <span className="retry-lesson-heading">
                    Lesson
                    <img src={lessonIcon} className="task-heading-icon" alt="" />
                  </span>
                  <span className="retry-expand-icon" aria-hidden="true">▼</span>
                </summary>
                <ReactMarkdown>{lesson.description}</ReactMarkdown>
              </details>
              <Box component="section" className="feedback-panel" aria-labelledby="retry-feedback-title">
                <Typography component="h2" id="retry-feedback-title">Feedback</Typography>
                {previousAttempt ? (
                  <ul>
                    {previousAttempt.feedback.map((item, index) => (
                      <li key={index}>
                        {item.met
                          ? <ThumbUpIcon sx={{ color: 'success.main' }} titleAccess="Positive feedback" />
                          : <ThumbDownIcon sx={{ color: 'error.main' }} titleAccess="Constructive feedback" />}
                        <span>{item.feedback}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No previous feedback is available in this session. You can still submit a new prompt.</p>
                )}
              </Box>
            </Box>
          ) : (
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
          )}

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
              helperText={retry && previousAttempt ? 'Your previous prompt is ready to edit.' : undefined}
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
