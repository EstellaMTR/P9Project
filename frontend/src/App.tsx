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
  const [employeeId, setEmployeeId] = useState<number | null>(() => {
    const savedId = sessionStorage.getItem('employeeId');
    const id = Number(savedId);
    return Number.isInteger(id) && id > 0 ? id : null;
  });

  function handleLoginSuccess(id: number) {
    sessionStorage.setItem('employeeId', String(id));
    setEmployeeId(id);
  }

  function handleLogout() {
    sessionStorage.removeItem('employeeId');
    setEmployeeId(null);
  }

  // if the employeeId is null, render the login page
  if (employeeId === null) {
    return <Login onLoginSuccess={handleLoginSuccess} />;
  }
  // otherwise, render the home page with the employeeId and logout handler
  return (
    <Routes>
      <Route
        path="/"
        element={<Home employeeId={employeeId} onLogout={handleLogout} />}
      />

      <Route path="/course" element={<CoursePage employeeId={employeeId} />} />

      <Route path="/lesson" element={<LessonPage onLogout={handleLogout} />} />

      <Route path="/task" element={<TaskPage onLogout={handleLogout} />} />

      <Route path="/feedback" element={<FeedbackPage />} />

      <Route path="/try-again-task" element={<TryAgainTaskPage />} />

      <Route path="/not-implemented" element={<NotImplementedPage />} />
    </Routes>
  );
}

export default App;
