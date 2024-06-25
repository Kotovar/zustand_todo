import { createFileRoute, redirect } from '@tanstack/react-router';

import { MyDay } from '../pages/Myday';

export const Route = createFileRoute('/myday')({
  component: MyDay,
  beforeLoad: async ({ context }) => {
    if (!context.auth) {
      throw redirect({
        to: '/signin',
      });
    }
  },
});
