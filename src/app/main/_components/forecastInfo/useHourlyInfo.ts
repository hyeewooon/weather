import { useEffect, useRef } from 'react';
import { getHours } from 'date-fns';

import { useLocationStore } from '@/app/_store/location';
import { useHourlyWeatherStore, type HourlyInfo } from '@/app/_store/hourlyWeather';
import useGetForecastInfo from '@/app/_queries/useGetForecastInfo';

function useHourlyInfo() {
  const location = useLocationStore((state) => state.location);

  const list = useHourlyWeatherStore((state) => state.list);
  const changeHourlyList = useHourlyWeatherStore((state) => state.changeList);

  const currentHour = useRef(getHours(new Date()) ?? 0);

  // 7일간의 주간 예보 데이터
  const { data: forecastInfo } = useGetForecastInfo(
    {
      ...location,
      days: 7,
    },
    { staleTime: 1000 * 60 * 60 * 4 },
  );

  useEffect(() => {
    getHourly();
  }, [forecastInfo]);

  function getHourly() {
    if (!forecastInfo) return;

    // 오늘과 내일의 시간별 예보
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

  // 현재 시간부터 12시간치의 시간별 예보
  // 예: 현재 시간이 9시라면 9시~20시까지의 데이터만 사용
  return { list: list.slice(currentHour.current, currentHour.current + 12) };
}

export default useHourlyInfo;
