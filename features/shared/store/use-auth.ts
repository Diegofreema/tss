import AsyncStorage from '@react-native-async-storage/async-storage';
import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

import { User } from '../types';

type Store = {
  user: User | null;
  getUser: (user: User) => void;
  clearUser: () => void;
};

export const useAuth = create<Store>()(
  persist(
    (set) => ({
      user: null,
      getUser: (user) => {
        set((state) => ({ ...state, user }));
      },
      clearUser: () => {
        set({ user: null });
      },
    }),
    { name: 'user', storage: createJSONStorage(() => AsyncStorage) }
  )
);
