import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated/tasks')({
  beforeLoad: async ({ location }) => {
    if (location.href === '/tasks') {
      throw redirect({
        to: '/myday',
      });
    }
  },
});
