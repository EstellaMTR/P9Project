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
import CourseCard from '../components/CourseCard';
import NavigationSidebar from '../components/NavigationSidebar';
import '../styles/Homepage.css';

type HomeProps = {
  employeeId: number;
  onLogout: () => void;
};

export default function Home({ employeeId, onLogout }: HomeProps) {
  const navigate = useNavigate();
  const [name, setName] = useState<string>();
  const [courses, setCourses] = useState<CourseProgressDto[]>();
  const [fallbackCourse, setFallbackCourse] = useState<CourseDto>();
  const [courseError, setCourseError] = useState(false);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    async function loadEmployee() {
      try {
        const { data } = await getEmployeeById({ path: { id: employeeId }, signal });
        if (!signal.aborted) setName(data?.firstName);
      } catch {
        if (!signal.aborted) setName(undefined);
      }
    }

    async function loadCourses() {
      try {
        const { data: rankedCourses } = await getInProgressCourses({
          path: { employeeId }, signal, throwOnError: true,
        });

        if (rankedCourses.length === 0) {
          const { data: catalog, response } = await getAllCourses({ signal });
          // The catalog endpoint returns 404 when there are no courses.
          if (!catalog && response?.status !== 404) {
            throw new Error('Could not load the course catalog');
          }

          const firstCourse = catalog?.reduce<CourseDto | undefined>(
            (first, course) => !first || course.id < first.id ? course : first,
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

  const visibleCourses = showAll ? courses : courses?.slice(0, 1);

  return (
    <Box className="home-page" sx={{ backgroundColor: 'background.default' }}>
      <Box className="home-frame" sx={{ backgroundColor: 'background.inner' }}>
        <div className="home-navigation">
          <NavigationSidebar defaultExpanded={true} onLogout={onLogout} />
        </div>

        <Box component="main" className="home-content">
          <h1>{name ? `Welcome back, ${name}! 👋` : 'Welcome back!'}</h1>
          <p>Pick up where you left off.</p>

          <section aria-labelledby="continue-learning">
            <div className="home-course-heading">
              <h2 id="continue-learning">Continue learning</h2>
              {courses && courses.length > 0 && (
                <form
                  onSubmit={(event) => {
                    event.preventDefault();
                    setShowAll(current => !current);
                  }}
                >
                  <button
                    type="submit"
                    className="home-course-toggle"
                    aria-controls="home-in-progress-courses"
                    aria-expanded={showAll}
                  >
                    {showAll ? 'Show featured course' : 'My courses in progress'}
                  </button>
                </form>
              )}
            </div>

            {courseError && <p role="alert">Could not load your course progress.</p>}
            {!courseError && !courses && <p role="status">Loading your courses…</p>}
            {courses?.length === 0 && !fallbackCourse && <p>No courses are available yet.</p>}

            <div className="home-course-list" id="home-in-progress-courses">
              {fallbackCourse && (
                <CourseCard
                  variant="featured"
                  title={fallbackCourse.title}
                  description={fallbackCourse.description}
                  xp={fallbackCourse.xpReward}
                  actionLabel="View course"
                  onAction={() => navigate(`/course?courseId=${fallbackCourse.id}`)}
                />
              )}
              {visibleCourses?.map((course, index) => (
                <CourseCard
                  key={course.courseId}
                  variant={index === 0 ? 'featured' : 'inProgress'}
                  title={course.title}
                  description={course.description}
                  xp={course.xpReward}
                  duration={`${course.completedLessons} of ${course.totalLessons} lessons completed`}
                  progress={course.progressPercent}
                  onAction={() => navigate(`/course?courseId=${course.courseId}`)}
                />
              ))}
            </div>
          </section>
        </Box>
      </Box>
    </Box>
  );
}
