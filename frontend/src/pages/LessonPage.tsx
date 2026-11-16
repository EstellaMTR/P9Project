import {
  Box,
  Container,
  Typography,
  List,
  ListItem,
  Button,
  Stack,
} from '@mui/material';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import lessonDescriptionIcon from '/src/assets/lessonDescriptionIcon.svg';
import ProgressBar from '../components/ProgressBar';
import BackgroundLayout from '../components/BackgroundLayout';

/* Lesson Page, also the first step after the Course Page.
 * The content for Page is hardcoded in at the moment,
 * but should be changed once the lesson pages has been made in the backend.
 */

type LessonPageProps = {
  onLogout: () => void;
};

export default function LessonPage({ onLogout }: LessonPageProps) {
  return (
    <BackgroundLayout onLogout={onLogout}>
      <Container
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

        {/* Lesson box */}
        <Box
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

        {/*Heading*/}
        <Typography variant="h1">A Common Goal</Typography>

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
          sx={{
            backgroundColor: 'background.default',
            borderRadius: 1,
            padding: 4,
          }}
        >
          <Typography
            variant="h2"
            sx={{
              fontSize: '28px',
              textAlign: 'center',
            }}
          >
            Give Your AI a Goal
          </Typography>

          <Typography variant="body1" sx={{ fontSize: '18px' }}>
            When prompting AI chatbots, it is important to explain clearly and
            concisely what its goal is. The goal describes{' '}
            <strong>what you want to achieve</strong> with the AI's response and
            what you intend to <strong>use the output for.</strong>
            <br />
            <br />
            Follow these rules to communicate the goal of your prompt:
            <List
              sx={{
                listStyleType: 'disc',
                pl: 4,
                py: 0,
              }}
            >
              <ListItem sx={{ display: 'list-item', py: 0 }}>
                <strong>State what you want to achieve</strong>
              </ListItem>
              <ListItem sx={{ display: 'list-item', py: 0 }}>
                <strong>Explain what you will use the output for</strong>
              </ListItem>
              <ListItem sx={{ display: 'list-item', py: 0 }}>
                <strong>Keep it clear and concise</strong>
              </ListItem>
            </List>
          </Typography>
        </Box>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="secondary"
            startIcon={<ArrowBack />}
          >
            Go back
          </Button>
          <Button
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
