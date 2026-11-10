import { Box, Button } from '@mui/material';

export default function Home() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: 'background.default',
        padding: 3,
      }}
    >
      <Box
        sx={{
          minHeight: 'calc(100vh - 48px)',
          backgroundColor: 'background.inner',
          borderRadius: '20px',
          padding: 3,
        }}
      >
        <h1>Welcome to the Home Page</h1>
        <p>Pick up where you left off.</p>
        <h2>Continue learning.</h2>

        <Button
          onClick={() => {
            sessionStorage.removeItem('isLoggedIn');
            window.location.reload();
          }}
        >
          Logout
        </Button>
      </Box>
    </Box>
  );
}