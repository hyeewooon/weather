import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

import type { Day } from '../_api/weather/model';

export type WeeklyInfo = Pick<
  Day,
  | 'maxtemp_c'
  | 'mintemp_c'
  | 'avgtemp_c'
  | 'totalprecip_mm'
  | 'daily_chance_of_rain'
  | 'condition'
> & {
  date: string;
};

type State = {
  list: WeeklyInfo[];
};

type Action = {
  changeList: (list: WeeklyInfo[]) => void;
};

const initState: State = {
  list: [],
};

export const useWeeklyWeatherStore = createWithEqualityFn<State & Action>()(
  (set) => ({
    ...initState,
    changeList: (list) => set({ list }),
  }),
  shallow,
);
