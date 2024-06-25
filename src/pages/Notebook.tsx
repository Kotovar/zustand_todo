interface Props {
  taskId: string;
}

export function Notebook({ taskId }: Readonly<Props>) {
  return <div>Notebook ID: {taskId}</div>;
}
