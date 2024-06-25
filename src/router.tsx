import { createRouter } from '@tanstack/react-router';

import { NotFoundRoute } from './components/NotFoundRoute';
import { routeTree } from './routeTree.gen';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const router = createRouter({
  routeTree,
  context: {
    auth: undefined,
  },
  defaultNotFoundComponent: () => {
    return <NotFoundRoute />;
  },
});
