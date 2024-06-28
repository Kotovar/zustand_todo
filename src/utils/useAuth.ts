import { useNavigate, useRouter } from '@tanstack/react-router';

import { useStore } from '../store/store';

export const useAuth = () => {
  const updateUser = useStore(state => state.logIn);
  const logout = useStore(state => state.logOut);
  const router = useRouter();
  const navigate = useNavigate();

  const signIn = () => {
    updateUser({
      uid: '423',
      notepads: ['423'],
      tasks: ['423'],
    });
  };

  const handleLogout = () => {
    logout();
    router.invalidate().finally(() => {
      navigate({ to: '/' });
    });
  };

  const handleSignIn = () => {
    signIn();
    router.invalidate().finally(() => {
      navigate({ to: '/myday' });
    });
  };

  return { handleLogout, handleSignIn };
};
