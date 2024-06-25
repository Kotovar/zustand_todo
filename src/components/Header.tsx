import { Link } from '@tanstack/react-router';

const auth = true;

export const Header = () =>
  auth ? (
    <header>
      <nav>
        <button>Sign Out</button>
      </nav>
    </header>
  ) : (
    <header>
      <nav>
        <Link to='/signin'>Sign In</Link>
        <Link to='/signup'>Sign Up</Link>
      </nav>
    </header>
  );
