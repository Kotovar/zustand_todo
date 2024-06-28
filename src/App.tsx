import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import CssBaseline from '@mui/material/CssBaseline';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { RouterProvider } from '@tanstack/react-router';
import { createContext, useMemo, useState } from 'react';

import { router } from './router';
import { useStore } from './store/store';

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

function App() {
  const isAuthenticating = useStore(state => state.isAuthenticating);
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} context={{ isAuthenticating }} />
    </>
  );
}

export default function ToggleColorMode() {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode(prevMode => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}
