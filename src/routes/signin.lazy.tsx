import { createLazyFileRoute } from '@tanstack/react-router';

import { SignIn } from '../pages/Signin';

export const Route = createLazyFileRoute('/signin')({
  component: SignIn,
});
