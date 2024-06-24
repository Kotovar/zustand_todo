import { createLazyFileRoute } from '@tanstack/react-router';

import { SignUp } from '../pages/Signup';

export const Route = createLazyFileRoute('/signup')({
  component: SignUp,
});
