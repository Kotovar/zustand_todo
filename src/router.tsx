import { createRouter } from '@tanstack/react-router';

import { NotFoundRoute } from './components/NotFoundRoute';
import { routeTree } from './routeTree.gen';

export const router = createRouter({
  routeTree,
  context: {
    isAuthenticating: undefined,
  },
  defaultNotFoundComponent: () => {
    return <NotFoundRoute />;
  },
});
