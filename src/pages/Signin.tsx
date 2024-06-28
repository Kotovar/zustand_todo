import { useAuth } from '../utils/useAuth';

export function SignIn() {
  const { handleSignIn } = useAuth();

  return (
    <main>
      <div>Sign In</div>
      <button onClick={handleSignIn}>Sign In</button>
    </main>
  );
}
