import { Box, Button, Typography } from '@mui/material';
import ConstructionIcon from '@mui/icons-material/Construction';
import HomeIcon from '@mui/icons-material/Home';
import { Link } from 'react-router-dom';
import BackgroundLayout from '../components/BackgroundLayout';
import '../styles/LessonPage.css';
import '../styles/NotImplementedPage.css';

export default function NotImplementedPage({ onLogout }: { onLogout: () => void }) {
  return (
    <BackgroundLayout onLogout={onLogout} className="lesson-page unfinished-page">
      <Box component="main" className="unfinished-content">
        <Box className="unfinished-icon" sx={{ bgcolor: 'background.inner', color: 'secondary.main' }}>
          <ConstructionIcon />
        </Box>
        <Typography component="p" className="unfinished-label">COMING SOON</Typography>
        <Typography component="h1">More learning is on the way</Typography>
        <Typography component="p" className="unfinished-description">
          This part of your AI Trainer is still being built. In the meantime,
          head back home to explore your courses and keep learning.
        </Typography>
        <Button component={Link} to="/" color="secondary" startIcon={<HomeIcon />}>
          Back to Home
        </Button>
      </Box>
    </BackgroundLayout>
  );
}
