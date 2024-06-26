import { createFileRoute } from '@tanstack/react-router';

import { Notebook as NotebookComponent } from '../../pages/Notebook';
const Notebook = () => {
  const { taskId } = Route.useParams();
  return <NotebookComponent taskId={taskId} />;
};

export const Route = createFileRoute('/_authenticated/tasks/$taskId')({
  component: Notebook,
});
