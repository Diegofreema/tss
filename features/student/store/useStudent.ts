import { create } from 'zustand';

import AsyncStorage from '@react-native-async-storage/async-storage';
import { createJSONStorage, persist } from 'zustand/middleware';
import { StudentType } from '../types';

type Store = {
  student: StudentType | null;
  getStudent: (student: StudentType) => void;
  clearStudent: () => void;
};

export const useStudent = create<Store>()(
  persist(
    (set) => ({
      student: null,
      getStudent: (student) => {
        set({ student });
      },
      clearStudent() {
        set({ student: null });
      },
    }),
    { name: 'student', storage: createJSONStorage(() => AsyncStorage) }
  )
);
