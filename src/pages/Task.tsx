interface Props {
  taskId: string;
}

export function Task({ taskId }: Readonly<Props>) {
  return <div>Task ID: {taskId}</div>;
}
