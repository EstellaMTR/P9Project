import { Box, Button } from '@mui/material';
import { useRef, useState } from 'react';
import { loginEmployee } from '../api';
import solarPanel from '/src/assets/solarPanel.svg';
import windmill from '/src/assets/windmill.svg';
import eweLogo from '/src/assets/eweLogo.svg';
import '../App.css';
import '../styles/Login.css';

type LoginProps = {
  onLoginSuccess: () => void;
};

export default function Login({ onLoginSuccess }: LoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const isSubmitting = useRef(false);

  async function handleLogin(event: React.SubmitEvent<HTMLFormElement>) {
    event.preventDefault();
    if (isSubmitting.current) return;
    isSubmitting.current = true;
    setIsLoading(true);
    setError('');
    try {
      const result = await loginEmployee({
        body: {
          email: email,
          password: password,
        },
      });
      if (result.response?.ok && typeof result.data === 'number') {
        onLoginSuccess();
      } else {
        setError(
          result.response?.status === 400 || result.response?.status === 404
            ? 'Email or password is incorrect.'
            : 'Could not log in. Please try again.',
        );
      }
    } catch {
      setError('Could not connect. Please try again.');
    } finally {
      isSubmitting.current = false;
      setIsLoading(false);
    }
  }

  return (
    <div className="login-container">
      <Box
        className="login-box"
        sx={{
          width: '100%',
          maxWidth: '450px',
          backgroundColor: '#CFE2F5',
          borderRadius: '35px',
          padding: 'clamp(16px, 4vh, 40px)',
          boxSizing: 'border-box',
        }}
      >
        <img src={solarPanel} alt="" className="solarPanel" />
        <img src={windmill} alt="" className="windmill-left" />
        <img src={windmill} alt="" className="windmill-right" />
        <form
          className="login-form"
          onSubmit={handleLogin}
          aria-busy={isLoading}
        >
          <div className="login-fields">
            <div className="login-field">
              <label htmlFor="login-email" className="label">
                Email
              </label>
              <input
                className="login-input"
                id="login-email"
                name="email"
                type="email"
                autoComplete="username"
                required
                disabled={isLoading}
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>

            <div className="login-field">
              <label htmlFor="login-password" className="label">
                Password
              </label>
              <input
                className="login-input"
                id="login-password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                disabled={isLoading}
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            </div>
          </div>
          {error && (
            <p role="alert" style={{ color: 'red' }}>
              {error}
            </p>
          )}
          <Button type="submit" disabled={isLoading}>
            {isLoading ? 'Logging in…' : 'Login'}
          </Button>
        </form>
      </Box>
      <img src={eweLogo} alt="" className="eweLogo" />
    </div>
  );
}