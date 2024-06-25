import { createRootRouteWithContext, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';

import { Header } from '../components/Header';
import { Slider } from '../components/Slider';

interface MyRouterContext {
  auth: boolean;
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: () => (
    <>
      <Header />
      <Slider />
      <Outlet />
      <TanStackRouterDevtools />
    </>
  ),
});
