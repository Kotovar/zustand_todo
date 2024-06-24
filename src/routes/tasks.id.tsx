import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/tasks/id')({
  component: undefined,
  beforeLoad: async ({ context, location }) => {
    if (!context.auth) {
      throw redirect({
        to: '/signin',
      });
    } else if (location.href === '/tasks/id') {
      throw redirect({
        to: '/myday',
      });
    }
  },
});
