import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/tasks')({
  beforeLoad: async ({ context, location }) => {
    if (!context.isAuthenticating) {
      throw redirect({
        to: '/signin',
      });
    } else if (location.href === '/tasks') {
      throw redirect({
        to: '/myday',
      });
    }
  },
});
