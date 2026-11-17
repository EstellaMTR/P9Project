import type { CourseDto } from '../../api';
import CourseCard from '../CourseCard';
import '../../styles/RecommendedCourses.css';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

type RecommendedCoursesProps = {
  courses: CourseDto[];
  onOpenCourse: (courseId: number) => void;
};

export default function RecommendedCourses({
  courses,
  onOpenCourse,
}: RecommendedCoursesProps) {
  return (
    <div className="more-courses">
      <div className="home-course-heading">
        <Typography
          variant="h2"
          sx={{
            fontSize: '1.5rem',
            color: 'text.primary',
          }}
        >
          More courses for you
        </Typography>

        <Button
          component={Link}
          to="/not-implemented"
          variant="contained"
          sx={{
            bgcolor: 'background.paper',
            color: 'secondary.main',
            border: '1px solid',
            borderColor: 'secondary.light',
            px: 2.5,
            py: 0.25,
            fontSize: '0.75rem',
            '&:hover': {
              bgcolor: 'grey.100',
            },
          }}
        >
          See all courses
        </Button>
      </div>
      <div className="course-list">
        {courses.slice(1, 4).map((course) => (
          <CourseCard
            key={course.id}
            variant="recommended"
            title={course.title}
            description={course.description}
            xp={course.xpReward}
            onAction={() => onOpenCourse(course.id)}
          />
        ))}
      </div>
    </div>
  );
}
