import { createFileRoute, redirect } from '@tanstack/react-router';

import { Home } from '../pages/Home';

export const Route = createFileRoute('/')({
  component: Home,
  beforeLoad: async ({ context }) => {
    if (context.isAuthenticating) {
      throw redirect({
        to: '/myday',
      });
    }
  },
});
