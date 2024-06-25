import { Link } from '@tanstack/react-router';

interface Props {
  isAuthenticating: boolean;
  logout: () => void;
}

export const Header = ({ isAuthenticating, logout }: Props) => {
  const container = isAuthenticating ? (
    <button onClick={logout}>Sign Out</button>
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
