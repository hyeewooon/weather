import { useEffect } from 'react';

import { useLocationStore } from '@/app/_store/location';
import { useHourlyWeatherStore, type HourlyInfo } from '@/app/_store/hourlyWeather';
import { useWeeklyWeatherStore, type WeeklyInfo } from '@/app/_store/weeklyWeather';
import useGetForecastInfo from '@/app/_queries/useGetForecastInfo';

function useForecastInfo() {
  const location = useLocationStore((state) => state.location);
  const changeHourlyList = useHourlyWeatherStore((state) => state.changeList);
  const changeWeelyList = useWeeklyWeatherStore((state) => state.changeList);

  const { data: forecastInfo } = useGetForecastInfo(
    {
      ...location,
      days: 7,
    },
    { staleTime: 1000 * 60 * 60 * 4 },
  );

  useEffect(() => {
    getHourly();
    getWeekly();
  }, [forecastInfo]);

  function getHourly() {
    if (!forecastInfo) return;

    const forecastList = [
      ...forecastInfo.forecast.forecastday[0].hour,
      ...forecastInfo.forecast.forecastday[1].hour,
    ];

    const list = forecastList.reduce((acc: HourlyInfo[], cur) => {
      const { time, temp_c, precip_mm, chance_of_rain, condition } = cur;
      return [
        ...acc,
        {
          time,
          temp_c,
          precip_mm,
          chance_of_rain,
          condition,
        },
      ];
    }, []);

    changeHourlyList(list);
  }

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

  return {};
}

export default useForecastInfo;
