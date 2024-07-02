import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';
import { persist } from 'zustand/middleware';

export type LocationInfo = {
  id: string;
  cityName: string;
  lat: number;
  lng: number;
};

type State = {
  location: LocationInfo;
  hasHydrated: boolean;
};

type Action = {
  setHasHydrated: (hasHydrated: boolean) => void;
  changeLocation: (location: LocationInfo) => void;
  reset: () => void;
};

const initState: State = {
  hasHydrated: false,
  location: {
    id: '',
    cityName: '',
    lat: 0,
    lng: 0,
  },
};

export const useLocationStore = createWithEqualityFn<State & Action>()(
  persist(
    (set) => ({
      ...initState,
      setHasHydrated: (hasHydrated) =>
        set({
          hasHydrated: hasHydrated,
        }),
      changeLocation: (location) => set({ location }),
      reset: () => set(initState),
    }),
    {
      name: 'local-storage-location',
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
  shallow,
);
