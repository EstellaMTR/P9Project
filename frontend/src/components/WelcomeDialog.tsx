import { Button, Dialog, DialogContent, DialogTitle, Typography } from '@mui/material';
import '../styles/WelcomeDialog.css';

type WelcomeDialogProps = {
  open: boolean;
  onClose: () => void;
};

export default function WelcomeDialog({ open, onClose }: WelcomeDialogProps) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      className="welcome-dialog"
      aria-labelledby="welcome-title"
      aria-describedby="welcome-description"
      maxWidth="sm"
      fullWidth
    >
      <DialogTitle id="welcome-title">
        Welcome to your<br />AI Trainer
      </DialogTitle>
      <DialogContent>
        <div id="welcome-description">
          <Typography component="p">
            Here you can learn more about <strong>how to use your everyday AI chatbots</strong> for your work!
          </Typography>
          <Typography component="p">
            You will gain <strong>streaks, experience points</strong> (XP) and <strong>levels</strong> as you learn more.
            This will allow you to <strong>compete with your co-workers</strong> through the leaderboard.
          </Typography>
          <Typography component="p" className="welcome-invitation">
            Let’s start your AI Training!
          </Typography>
        </div>
        <form onSubmit={(event) => { event.preventDefault(); onClose(); }}>
          <Button type="submit" autoFocus>Let’s train!</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
