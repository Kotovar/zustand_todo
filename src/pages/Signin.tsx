import { useStore } from '../store/store';

export function SignIn() {
  const updateUser = useStore(state => state.logIn);

  return (
    <>
      <div>Sign In</div>
      <button
        onClick={() =>
          updateUser({
            uid: '423',
            notepads: ['423'],
            tasks: ['423'],
          })
        }
      >
        Sign In
      </button>
    </>
  );
}
