import Login from './pages/Login';
import { useState } from 'react';
import Home from './pages/Home';
import { Routes, Route } from 'react-router-dom';
import CoursePage from './pages/CoursePage';
import TaskPage from './pages/TaskPage';
import FeedbackPage from './pages/FeedbackPage';
import TryAgainTaskPage from './pages/TryAgainTaskPage';
import NotImplementedPage from './pages/NotImplementedPage';
import LessonPage from './pages/LessonPage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(
    () => sessionStorage.getItem('isLoggedIn') === 'true',
  );

  function handleLoginSuccess() {
    sessionStorage.setItem('isLoggedIn', 'true');
    setIsLoggedIn(true);
  }

  function handleLogout() {
    sessionStorage.removeItem('isLoggedIn');
    setIsLoggedIn(false);
  }

  if (!isLoggedIn) {
  return <Login onLoginSuccess={handleLoginSuccess} />;
}

return (
  <Routes>
    <Route
      path="/"
      element={<Home onLogout={handleLogout} />}
    />

    <Route
      path="/course"
      element={<CoursePage />}
    />

    <Route
      path="/lesson"
      element={<LessonPage onLogout={handleLogout} />}
    />

    <Route
      path="/task"
      element={<TaskPage />}
    />

    <Route
      path="/feedback"
      element={<FeedbackPage />}
    />

    <Route
      path="/try-again-task"
      element={<TryAgainTaskPage />}
    />

    <Route
      path="/not-implemented"
      element={<NotImplementedPage />}
    />
  </Routes>
);
}

export default App;