import { useSearchParams } from 'react-router-dom';
import TaskPage from './TaskPage';

type TryAgainTaskPageProps = {
  employeeId: number;
  onLogout: () => void;
};

export default function TryAgainTaskPage({ employeeId, onLogout }: TryAgainTaskPageProps) {
  const [searchParams] = useSearchParams();
  return (
    <TaskPage
      key={`${employeeId}:${searchParams.get('lessonId')}`}
      employeeId={employeeId}
      onLogout={onLogout}
      retry
    />
  );
}
