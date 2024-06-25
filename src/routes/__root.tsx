import { createRootRouteWithContext } from '@tanstack/react-router';

import { Page } from '../components/Page';

interface MyRouterContext {
  isAuthenticating: boolean;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: Page,
});
