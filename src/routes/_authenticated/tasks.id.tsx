import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/tasks/id')({
  component: undefined,
  beforeLoad: async ({ location }) => {
    if (location.href === '/tasks/id') {
      throw redirect({
        to: '/myday',
      });
    }
  },
});
