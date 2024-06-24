import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/task/$taskId")({
  component: Task,
});

function Task() {
  const { taskId } = Route.useParams();
  return <div>Post ID: {taskId}</div>;
}
