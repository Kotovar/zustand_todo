import { Link } from '@tanstack/react-router';

export function NotFoundRoute() {
  return (
    <div>
      <p>Not found!</p>
      <Link to='/'>Go home</Link>
    </div>
  );
}
