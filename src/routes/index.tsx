import { createFileRoute, redirect } from '@tanstack/react-router';

import { Home } from '../pages/Home';

export const Route = createFileRoute('/')({
  component: Home,
  beforeLoad: async ({ context, location }) => {
    if (context.auth) {
      throw redirect({
        to: '/myday',
        search: {
          redirect: location.href,
        },
      });
    }
  },
});
