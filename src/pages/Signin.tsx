import { useAuth } from '../utils/useAuth';

export function SignIn() {
  const { handleSignIn } = useAuth();

  return (
    <>
      <div>Sign In</div>
      <button onClick={handleSignIn}>Sign In</button>
    </>
  );
}
