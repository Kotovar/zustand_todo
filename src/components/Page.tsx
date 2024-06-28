import { Outlet } from '@tanstack/react-router';

import { useStore } from '../store/store';
import { Header } from './Header';
import { Slider } from './Slider';

export const Page = () => {
  const isAuthenticating = useStore(state => state.isAuthenticating);

  return (
    <>
      <Header isAuthenticating={isAuthenticating} />
      <Slider isAuthenticating={isAuthenticating} />

      <Outlet />
    </>
  );
};
