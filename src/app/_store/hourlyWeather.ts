import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

import type { Hour } from '../_api/weather/model';

export type HourlyInfo = Pick<
  Hour,
  'time' | 'temp_c' | 'precip_mm' | 'chance_of_rain' | 'condition'
>;

type State = {
  list: HourlyInfo[];
};

type Action = {
  changeList: (list: HourlyInfo[]) => void;
};

const initState: State = {
  list: [],
};

export const useHourlyWeatherStore = createWithEqualityFn<State & Action>()(
  (set) => ({
    ...initState,
    changeList: (list) => set({ list }),
  }),
  shallow,
);
