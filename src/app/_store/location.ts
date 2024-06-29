import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';
import { persist } from 'zustand/middleware';

import type { LocationInfo } from '../_api/weather/model';

type State = {
  location: LocationInfo;
};

type Action = {
  changeLocation: (location: LocationInfo) => void;
  reset: () => void;
};

const initState: State = {
  location: {
    id: 'seoul',
    cityName: '서울특별시',
    lat: 37.5519,
    lng: 126.9918,
  },
};

export const useLocationStore = createWithEqualityFn<State & Action>()(
  persist(
    (set) => ({
      ...initState,
      changeLocation: (location) => set({ location }),
      reset: () => set(initState),
    }),
    {
      name: 'location-storage',
    },
  ),
  shallow,
);
