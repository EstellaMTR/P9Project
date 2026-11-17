import { useState } from 'react';
import type { CourseDto, CourseProgressDto } from '../../api';
import CourseCard from '../CourseCard';

type ContinueLearningProps = {
  courses: CourseProgressDto[] | undefined;
  fallbackCourse: CourseDto | undefined;
  courseError: boolean;
  onOpenCourse: (courseId: number) => void;
};

export default function ContinueLearning({
  courses,
  fallbackCourse,
  courseError,
  onOpenCourse,
}: ContinueLearningProps) {
  const [showAll, setShowAll] = useState(false);
  const visibleCourses = showAll ? courses : courses?.slice(0, 1);

  return (
    <section aria-labelledby="continue-learning">
      <div className="home-course-heading">
        {fallbackCourse && courses && courses.length === 0 && (
          <h2 id="continue-learning">Start learning</h2>
        )}
        {courses && courses.length > 0 && (
          <h2 id="continue-learning">Continue learning</h2>
        )}
        {courses && courses.length > 0 && (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              setShowAll((current) => !current);
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
      {courses?.length === 0 && !fallbackCourse && (
        <p>No courses are available yet.</p>
      )}

      <div className="home-course-list" id="home-in-progress-courses">
        {fallbackCourse && (
          <CourseCard
            variant="featured"
            title={fallbackCourse.title}
            description={fallbackCourse.description}
            xp={fallbackCourse.xpReward}
            actionLabel="View course"
            onAction={() => onOpenCourse(fallbackCourse.id)}
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
            onAction={() => onOpenCourse(course.courseId)}
          />
        ))}
      </div>
    </section>
  );
}
