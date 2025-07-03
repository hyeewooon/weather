import { useEffect } from 'react';

import { useLocationStore } from '@/app/_store/location';
import { useWeeklyWeatherStore, type WeeklyInfo } from '@/app/_store/weeklyWeather';
import useGetForecastInfo from '@/app/_queries/useGetForecastInfo';

function useWeeklyInfo() {
  const location = useLocationStore((state) => state.location);

  const list = useWeeklyWeatherStore((state) => state.list);
  const changeWeelyList = useWeeklyWeatherStore((state) => state.changeList);

  // 7일간의 주간 예보 데이터
  const { data: forecastInfo } = useGetForecastInfo(
    {
      ...location,
      days: 7,
    },
    { staleTime: 1000 * 60 * 60 * 4 }, // 4시간
  );

  useEffect(() => {
    getWeekly();
  }, [forecastInfo]);

  function getWeekly() {
    if (!forecastInfo) return;

    const list = forecastInfo.forecast.forecastday.reduce((acc: WeeklyInfo[], cur) => {
      return [
        ...acc,
        {
          date: cur.date,
          maxtemp_c: cur.day.maxtemp_c,
          mintemp_c: cur.day.mintemp_c,
          avgtemp_c: cur.day.avgtemp_c,
          totalprecip_mm: cur.day.totalprecip_mm,
          daily_chance_of_rain: cur.day.daily_chance_of_rain,
          condition: cur.day.condition,
        },
      ];
    }, []);

    changeWeelyList(list);
  }

  return { list };
}

export default useWeeklyInfo;
