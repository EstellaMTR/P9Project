import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getAllCourses,
  getCourseEmployee,
  getCourseEmployeeByCourseIdEmployeeId,
  getLessonCourseByCourseId,
  getEmployeeById,
  getInProgressCourses,
  getLeaderboard,
  type CourseDto,
  type CourseProgressDto,
  type LeaderboardEntryDto,
} from '../api';
import ContinueLearning from '../components/HomePage/ContinueLearning';
import NavigationSidebar from '../components/NavigationSidebar';
import '../styles/Homepage.css';
import RecommendedCourses from '../components/HomePage/RecommendedCourses';
import Profile from '../components/HomePage/Profile';
import Leaderboard from '../components/HomePage/Leaderboard';

type HomeProps = {
  employeeId: number;
  onLogout: () => void;
};

export default function Home({ employeeId, onLogout }: HomeProps) {
  const navigate = useNavigate();
  const [name, setName] = useState<string>();
  const [lastName, setLastName] = useState<string>();
  const [xpAccumulated, setXpAccumulated] = useState<number>();
  const [courses, setCourses] = useState<CourseProgressDto[]>();
  const [fallbackCourse, setFallbackCourse] = useState<CourseDto>();
  const [fallbackCompleted, setFallbackCompleted] = useState(false);
  const [fallbackProgress, setFallbackProgress] = useState(0);
  const [catalogCourses, setCatalogCourses] = useState<CourseDto[]>([]);
  const [courseError, setCourseError] = useState(false);
  const [employees, setEmployees] = useState<LeaderboardEntryDto[]>([]);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function loadEmployee() {
      try {
        const { data } = await getEmployeeById({
          path: { id: employeeId },
          signal,
        });
        if (!signal.aborted) {
          setName(data?.firstName);
          setLastName(data?.lastName);
          setXpAccumulated(data?.xpAccumulated);
        }
      } catch {
        if (!signal.aborted) {
          setName(undefined);
          setLastName(undefined);
          setXpAccumulated(undefined);
        }
      }
    }

    async function loadCourses() {
      try {
        const { data: rankedCourses } = await getInProgressCourses({
          path: { employeeId },
          signal,
          throwOnError: true,
        });

        if (rankedCourses.length === 0) {
          const { data: catalog, response } = await getAllCourses({ signal });
          // The catalog endpoint returns 404 when there are no courses.
          setCatalogCourses(catalog || []);
          if (!catalog && response?.status !== 404) {
            throw new Error('Could not load the course catalog');
          }

          const firstCourse = catalog?.reduce<CourseDto | undefined>(
            (first, course) =>
              !first || course.id < first.id ? course : first,
            undefined,
          );

          const { data: enrollments } = await getCourseEmployee({
            path: { employeeId }, signal, throwOnError: true,
          });
          let completed = enrollments.some((item) => item.courseId === firstCourse?.id && item.status === 2);
          let progressPercent = completed ? 100 : 0;
          if (firstCourse && !completed) {
            const [lessonResult, progressResult] = await Promise.all([
              getLessonCourseByCourseId({ path: { courseId: firstCourse.id }, signal }),
              getCourseEmployeeByCourseIdEmployeeId({ path: { courseId: firstCourse.id, employeeId }, signal, throwOnError: true }),
            ]);
            if (!lessonResult.data && lessonResult.response?.status !== 404) {
              throw new Error('Could not load course lessons');
            }
            const lessons = lessonResult.data ?? [];
            const completedIds = new Set(progressResult.data.filter((item) => item.isCompleted).map((item) => item.lessonId));
            const count = lessons.filter((lesson) => lesson.id !== undefined && completedIds.has(lesson.id)).length;
            progressPercent = lessons.length ? Math.round(count / lessons.length * 100) : 0;
            completed = lessons.length > 0 && count === lessons.length;
          }

          if (!signal.aborted) {
            setFallbackCourse(firstCourse);
            setFallbackCompleted(completed);
            setFallbackProgress(progressPercent);
            setCourses([]);
          }
          return;
        }

        if (!signal.aborted) {
          setFallbackCourse(undefined);
          setCourses(rankedCourses);
        }
      } catch {
        if (!signal.aborted) setCourseError(true);
      }
    }

    async function loadEmployees() {
      const { data: entries } = await getLeaderboard({ signal });

      if (!signal.aborted && entries !== undefined) {
        setEmployees(entries);
      }
    }

    void loadEmployee();
    void loadCourses();
    void loadEmployees();
    return () => controller.abort();
  }, [employeeId]);

  function openCourse(courseId: number) {
    navigate(`/course?courseId=${courseId}`);
  }

  return (
    <Box className="home-page" sx={{ backgroundColor: 'background.default' }}>
      <Box className="home-frame" sx={{ backgroundColor: 'background.inner' }}>
        <div className="home-navigation">
          <NavigationSidebar defaultExpanded={true} onLogout={onLogout} />
        </div>

        <Box component="main" className="home-content">
          <h1>{name ? `Welcome back, ${name}! 👋` : 'Welcome back!'}</h1>
          <p>Pick up where you left off.</p>

          <ContinueLearning
            courses={courses}
            fallbackCourse={fallbackCourse}
            fallbackCompleted={fallbackCompleted}
            fallbackProgress={fallbackProgress}
            courseError={courseError}
            onOpenCourse={openCourse}
          />

          <RecommendedCourses
            courses={catalogCourses}
            onOpenCourse={openCourse}
          />
        </Box>
        <div className="right-sidebar">
          <Profile
            employeeId={employeeId}
            firstName={name}
            lastName={lastName}
            xpAccumulated={xpAccumulated}
          />

          <Leaderboard employees={employees} employeeId={employeeId} />
        </div>
      </Box>
    </Box>
  );
}
