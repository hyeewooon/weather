import { useMemo } from 'react';
import { isSameDay } from 'date-fns';

import { useLocationStore } from '@/app/_store/location';
import { useWeeklyWeatherStore } from '@/app/_store/weeklyWeather';
import useGetCurrentInfo from '@/app/_queries/useGetCurrentInfo';

function useCurrentInfo() {
  const location = useLocationStore((state) => state.location);
  const weeklyWeather = useWeeklyWeatherStore((state) => state.list);

  const { data, isFetched } = useGetCurrentInfo(location);

  const weatherInfo = useMemo(() => {
    return weeklyWeather.find((v) => isSameDay(new Date(v.date), new Date()));
  }, [weeklyWeather]);

  return { data, isFetched, weatherInfo };
}

export default useCurrentInfo;
