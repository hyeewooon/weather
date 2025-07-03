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
  isHydrated: boolean;
};

type Action = {
  setHydrated: (hasHydrated: boolean) => void;
  changeLocation: (location: LocationInfo) => void;
  reset: () => void;
};

const initState: State = {
  isHydrated: false,
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
      setHydrated: (isHydrated) => set({ isHydrated }),
      changeLocation: (location) => set({ location }),
      reset: () => set(initState),
    }),
    {
      name: 'local-storage-location',
      onRehydrateStorage: () => {
        console.log('hydration starts');

        return (state, error) => {
          if (!error) {
            console.log('hydration finished');
            state?.setHydrated(true);
          }
        };
      },
    },
  ),
  shallow,
);
