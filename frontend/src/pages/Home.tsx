import { Button } from '@mui/material';

export default function Home() {
  return (
    <div>
      <h1>Welcome to the Home Page</h1>
      <p>This is the home page of our application.</p>
      <Button
        onClick={() => {
          sessionStorage.removeItem('isLoggedIn');
          window.location.reload();
        }}
      >
        Logout
      </Button>
    </div>
  );
}
