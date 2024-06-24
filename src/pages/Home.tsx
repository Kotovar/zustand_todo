import { Link } from '@tanstack/react-router';

export function Home() {
  return (
    <main>
      <h1>Get started!</h1>
      <button>
        <Link to='/signin'>Sign In</Link>
      </button>
    </main>
  );
}
