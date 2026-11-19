import { Box, Typography } from '@mui/material';
import NavigationSidebar from '../components/NavigationSidebar';
import { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import {
  getCourseByCourseId,
  getCourseEmployeeByCourseIdEmployeeId,
  getLessonCourseByCourseId,
  type Lesson,
  type LessonEmployeeDto,
} from '../api';
import '../styles/CoursePage.css';
import lessonLine from '../assets/Line 8.svg';
import completionSquare from '../assets/Competion-Square.svg';

type CoursePageProps = {
  employeeId: number;
};

export default function CoursePage({ employeeId }: CoursePageProps) {
  const [courseName, setCourseName] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [lessonProgress, setLessonProgress] = useState<LessonEmployeeDto[]>([]);

  const [searchParams] = useSearchParams();
  const id = Number(searchParams.get('courseId'));
  console.log(id);

  useEffect(() => {
    async function loadCourse() {
      const { data: course } = await getCourseByCourseId({
        path: { id },
        throwOnError: true,
      });
      setCourseName(course.title);
      setCourseDescription(course.description);
      const { data: lessons } = await getLessonCourseByCourseId({
        path: { courseId: id },
        throwOnError: true,
      });

      const { data: progress } = await getCourseEmployeeByCourseIdEmployeeId({
        path: { courseId: id, employeeId },
        throwOnError: true,
      });
      setLessons(lessons);
      setLessonProgress(progress);
    }

    void loadCourse();
  }, [id, employeeId]);

  return (
    <>
      <Box
        className="course-page"
        sx={{ backgroundColor: 'background.default' }}
      >
        <Box
          className="course-frame"
          sx={{ backgroundColor: 'background.inner' }}
        >
          <div className="course-navigation">
            <NavigationSidebar defaultExpanded={false} />
          </div>

          <Box
            component="main"
            className="course-content"
            sx={{ bgcolor: 'rgba(255, 255, 255, 0.65)' }}
          >
            <Typography component="h1" variant="h2" className="course-title">
              {courseName}
            </Typography>
            <Box
              className="course-description"
              sx={{ bgcolor: 'background.inner' }}
            >
              <Typography component="p" variant="body1">
                {courseDescription}
              </Typography>
            </Box>
            <Box className="course-lessons">
              {lessons.map((lesson, index) => {
                const isCompleted = lessonProgress.some(
                  (record) =>
                    record.lessonId === lesson.id && record.isCompleted,
                );

                return (
                  <Box
                    component={Link}
                    to={`/lesson?lessonId=${lesson.id}`}
                    key={lesson.id}
                    className="course-lesson"
                    sx={{
                      borderColor: 'secondary.main',
                      bgcolor: isCompleted ? '#C8E2C8' : 'background.inner',
                    }}
                  >
                    <img
                      src={lessonLine}
                      className="course-lesson-line"
                      alt=""
                      aria-hidden="true"
                    />
                    <Typography
                      className="course-lesson-number"
                      variant="body2"
                    >
                      Lesson {index + 1}
                    </Typography>
                    <Typography className="course-lesson-title" variant="body2">
                      {lesson.title}
                    </Typography>
                    {isCompleted && (
                      <Box
                        className="course-lesson-check"
                        aria-label="Completed"
                        sx={{ bgcolor: 'success.main', color: '#C8E2C8' }}
                      >
                        ✓
                      </Box>
                    )}
                  </Box>
                );
              })}
              <Box className="course-completion">
                <img src={completionSquare} className="completion-square" alt="Course completion" />
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
