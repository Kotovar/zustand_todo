import { Outlet } from '@tanstack/react-router';

import { useStore } from '../store/store';
import { Header } from './Header';
import { Slider } from './Slider';

export const Page = () => {
  const isAuthenticating = useStore(state => state.isAuthenticating);
  const logout = useStore(state => state.logOut);

  return (
    <div>
      <Header isAuthenticating={isAuthenticating} logout={logout} />
      <Slider isAuthenticating={isAuthenticating} />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
