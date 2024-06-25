import { createFileRoute } from '@tanstack/react-router';

import { SignUp } from '../pages/Signup';

export const Route = createFileRoute('/signup')({
  component: SignUp,
});
