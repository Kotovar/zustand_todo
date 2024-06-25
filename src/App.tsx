import './styles/reset.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import { RouterProvider } from '@tanstack/react-router';

import { router } from './router';
import { useStore } from './store/store';

export function App() {
  const isAuthenticating = useStore(state => state.isAuthenticating);
  return <RouterProvider router={router} context={{ isAuthenticating }} />;
}
