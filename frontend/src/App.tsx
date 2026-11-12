import { Container, Typography } from '@mui/material';
import Login from './pages/Login';
import { useState } from 'react';
import Home from './pages/Home';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => sessionStorage.getItem('isLoggedIn') === 'true',
  );

  function handleLoginSuccess() {
    sessionStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  }
  return (
    <>{isLoggedIn ? <Home /> : <Login onLoginSuccess={handleLoginSuccess} />}</>
  );
}

export default App;
