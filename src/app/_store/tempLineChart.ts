import { createWithEqualityFn } from 'zustand/traditional';
import { shallow } from 'zustand/shallow';

export type ChartConfig = {
  width: number;
  height: number;
};

type State = {
  config: ChartConfig;
};

type Action = {
  changeConfig: (config: ChartConfig) => void;
};

const initState: State = {
  config: {
    width: 400,
    height: 150,
  },
};

export const useTempLineChartStore = createWithEqualityFn<State & Action>()(
  (set) => ({
    ...initState,
    changeConfig: (config) => set({ config }),
  }),
  shallow,
);
