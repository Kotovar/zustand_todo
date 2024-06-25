import { Link } from '@tanstack/react-router';

interface Props {
  isAuthenticating: boolean;
}

export const Slider = ({ isAuthenticating }: Props) => {
  const container = isAuthenticating ? (
    <aside>
      <li>
        <Link to='/myday'>My day</Link>
      </li>
    </aside>
  ) : null;

  return container;
};
