import { Link } from '@tanstack/react-router';

const auth = true;

export const Slider = () =>
  auth ? (
    <aside>
      <li>
        <Link to='/myday'>My day</Link>
      </li>
    </aside>
  ) : null;
