import { createFileRoute, redirect } from '@tanstack/react-router';

export const Route = createFileRoute('/_authenticated')({
  beforeLoad: async ({ context }) => {
    if (!context.isAuthenticating) {
      throw redirect({
        to: '/',
      });
    }
  },
});
