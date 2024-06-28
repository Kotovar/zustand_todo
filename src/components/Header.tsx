import { useTheme } from '@emotion/react';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import type { Theme } from '@mui/material';
import { Box, IconButton } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import { useNavigate } from '@tanstack/react-router';
import { useContext } from 'react';

import { ColorModeContext } from '../App';
import { useAuth } from '../utils/useAuth';

interface Props {
  isAuthenticating: boolean;
}

export const Header = ({ isAuthenticating }: Props) => {
  const { handleLogout } = useAuth();
  const navigate = useNavigate();
  const theme = useTheme() as Theme;
  const colorMode = useContext(ColorModeContext);

  const container = isAuthenticating ? (
    <Button color='inherit' variant='outlined' onClick={handleLogout}>
      Sign Out
    </Button>
  ) : (
    <>
      <Button
        color='inherit'
        variant='outlined'
        onClick={() => navigate({ to: '/signin' })}
      >
        Sign In
      </Button>
      <Button
        color='inherit'
        variant='outlined'
        onClick={() => navigate({ to: '/signup' })}
      >
        Sign Up
      </Button>
    </>
  );

  return (
    <AppBar
      position='static'
      sx={{ justifyContent: 'space-between', flexDirection: 'row' }}
    >
      <Box display='flex' alignItems='center' marginLeft='1rem'>
        <IconButton
          sx={{ ml: 1 }}
          onClick={colorMode.toggleColorMode}
          color='inherit'
        >
          {theme.palette.mode === 'dark' ? (
            <Brightness7Icon />
          ) : (
            <Brightness4Icon />
          )}
        </IconButton>
      </Box>

      <Toolbar
        disableGutters={true}
        component='nav'
        sx={{
          justifyContent: 'flex-end',
          columnGap: '1rem',
          paddingInline: '1rem',
        }}
      >
        {container}
      </Toolbar>
    </AppBar>
  );
};
