import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

import type { StoreState } from '../types/types';

export const useStore = create<StoreState>()(
  devtools(set => ({
    user: null,
    isAuthenticating: true,
    error: null,
    logIn: user =>
      set({
        user,
        isAuthenticating: true,
        error: null,
      }),
    logOut: () =>
      set({
        user: null,
        isAuthenticating: false,
        error: null,
      }),
    getError: error =>
      set({
        error: error,
      }),
  })),
);
