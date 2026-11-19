import { Box, Button, Stack, Typography } from '@mui/material';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import { Link, useSearchParams } from 'react-router-dom';
import BackgroundLayout from '../components/BackgroundLayout';
import ProgressBar from '../components/ProgressBar';
import { readFeedback } from '../feedbackSession';
import '../styles/LessonPage.css';
import '../styles/FeedbackPage.css';

type FeedbackPageProps = {
  employeeId: number;
  onLogout: () => void;
};

export default function FeedbackPage({ employeeId, onLogout }: FeedbackPageProps) {
  const [searchParams] = useSearchParams();
  const lessonId = Number(searchParams.get('lessonId'));
  const result = Number.isInteger(lessonId) && lessonId > 0
    ? readFeedback(employeeId, lessonId) : null;

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
          <Button component={Link} to={`/task?lessonId=${lessonId}`} color="warning">Try again</Button>
          <Button component={Link} to={`/course?courseId=${result.courseId}`} className="feedback-finish">Finish Session</Button>
        </Stack>
      </Box>
    </BackgroundLayout>
  );
}
