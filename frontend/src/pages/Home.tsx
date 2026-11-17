import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  getAllCourses,
  getEmployeeById,
  getInProgressCourses,
  type CourseDto,
  type CourseProgressDto,
} from '../api';
import ContinueLearning from '../components/HomePage/ContinueLearning';
import NavigationSidebar from '../components/NavigationSidebar';
import '../styles/Homepage.css';
import RecommendedCourses from '../components/HomePage/RecommendedCourses';

type HomeProps = {
  employeeId: number;
  onLogout: () => void;
};

export default function Home({ employeeId, onLogout }: HomeProps) {
  const navigate = useNavigate();
  const [name, setName] = useState<string>();
  const [courses, setCourses] = useState<CourseProgressDto[]>();
  const [fallbackCourse, setFallbackCourse] = useState<CourseDto>();
  const [catalogCourses, setCatalogCourses] = useState<CourseDto[]>([]);
  const [courseError, setCourseError] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function loadEmployee() {
      try {
        const { data } = await getEmployeeById({
          path: { id: employeeId },
          signal,
        });
        if (!signal.aborted) setName(data?.firstName);
      } catch {
        if (!signal.aborted) setName(undefined);
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

          if (!signal.aborted) {
            setFallbackCourse(firstCourse);
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

    void loadEmployee();
    void loadCourses();
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
            courseError={courseError}
            onOpenCourse={openCourse}
          />

          <RecommendedCourses
            courses={catalogCourses}
            onOpenCourse={openCourse}
          />
        </Box>
      </Box>
    </Box>
  );
}
