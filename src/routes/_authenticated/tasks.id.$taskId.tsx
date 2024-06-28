import { createFileRoute } from '@tanstack/react-router';

import { Task as TaskComponent } from '../../pages/Task';
const Task = () => {
  const { taskId } = Route.useParams();
  return <TaskComponent taskId={taskId} />;
};

export const Route = createFileRoute('/_authenticated/tasks/id/$taskId')({
  component: Task,
});
