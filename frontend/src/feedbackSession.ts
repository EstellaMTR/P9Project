import type { LessonFeedbackDto } from './api';

export type FeedbackSession = {
  lessonTitle: string;
  courseTitle: string;
  courseId: number;
  answer: string;
  feedback: LessonFeedbackDto[];
  completionXp?: number;
};

export function feedbackKey(employeeId: number, lessonId: number) {
  return `lesson-feedback:${employeeId}:${lessonId}`;
}

export function readFeedback(employeeId: number, lessonId: number): FeedbackSession | null {
  try {
    const value = JSON.parse(sessionStorage.getItem(feedbackKey(employeeId, lessonId)) ?? 'null');
    if (
      value && typeof value.lessonTitle === 'string' &&
      typeof value.courseTitle === 'string' && typeof value.courseId === 'number' &&
      typeof value.answer === 'string' && Array.isArray(value.feedback) &&
      (value.completionXp === undefined || (Number.isFinite(value.completionXp) && value.completionXp >= 0)) &&
      value.feedback.every((item: unknown) =>
        typeof item === 'object' && item !== null &&
        'met' in item && typeof item.met === 'boolean' &&
        'feedback' in item && typeof item.feedback === 'string')
    ) return value;
  } catch {
    // Invalid or unavailable session data is handled by the feedback page.
  }
  return null;
}
