import { RouterProvider } from '@tanstack/react-router';

import { router } from './router';

function InnerApp() {
  const auth = true;
  return <RouterProvider router={router} context={{ auth }} />;
}

export function App() {
  return <InnerApp />;
}
