import { Button } from '@mui/material';
import { useRef, useState } from 'react';
import { loginEmployee } from '../api';

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
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin} aria-busy={isLoading}>
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          name="email"
          type="email"
          autoComplete="username"
          required
          disabled={isLoading}
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
        <label htmlFor="login-password">Password</label>
        <input
          id="login-password"
          name="password"
          type="password"
          autoComplete="current-password"
          required
          disabled={isLoading}
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
        {error && <p role="alert" style={{ color: 'red' }}>{error}</p>}
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Logging in…' : 'Login'}
        </Button>
      </form>
    </div>
  );
}
