interface User {
  uid: string;
  notepads: string[];
  tasks: string[];
}

interface State {
  user: User | null;
  isAuthenticating: boolean;
  error: string | null;
}

interface Action {
  logIn: (user: User) => void;
  logOut: () => void;
  getError: (error: string) => void;
}

export type StoreState = State & Action;
