import { getHours } from 'date-fns';

import { useHourlyWeatherStore } from '@/app/_store/hourlyWeather';
import { useRef } from 'react';

function useHourlyInfo() {
  const list = useHourlyWeatherStore((state) => state.list);
  const currentHour = useRef(getHours(new Date()) ?? 0);

  return { list: list.slice(currentHour.current, currentHour.current + 12) };
}

export default useHourlyInfo;
