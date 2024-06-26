import { Link } from '@tanstack/react-router';

import { useAuth } from '../utils/useAuth';

interface Props {
  isAuthenticating: boolean;
}

export const Header = ({ isAuthenticating }: Props) => {
  const { handleLogout } = useAuth();

  const container = isAuthenticating ? (
    <button onClick={handleLogout}>Sign Out</button>
  ) : (
    <>
      <Link to='/signin'>Sign In</Link>
      <Link to='/signup'>Sign Up</Link>
    </>
  );

  return (
    <header>
      <nav>{container}</nav>
    </header>
  );
};
