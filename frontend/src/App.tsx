import { Container, Typography } from '@mui/material';
import Login from './pages/Login';
import { useState } from 'react';
import Home from './pages/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h3">Eurowind Learning Platform</Typography>

      {isLoggedIn ? (
        <Home />
      ) : (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
    </Container>
  );
}

export default App;
