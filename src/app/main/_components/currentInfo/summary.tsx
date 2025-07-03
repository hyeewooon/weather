'use client';

import { useMemo } from 'react';
import { isSameDay } from 'date-fns/isSameDay';

import { useWeeklyWeatherStore } from '@/app/_store/weeklyWeather';
import { useLocationStore } from '@/app/_store/location';
import useGetCurrentInfo from '@/app/_queries/useGetCurrentInfo';

import SummarySkeleton from './skeleton/summarySkeleton';

export default function Summary() {
  const location = useLocationStore((state) => state.location);

  const weeklyWeather = useWeeklyWeatherStore((state) => state.list);
  const { data, isFetching } = useGetCurrentInfo(location);

  const weatherInfo = useMemo(() => {
    /** 오늘 날씨 정보 */
    return weeklyWeather.find((v) => isSameDay(new Date(v.date), new Date()));
  }, [weeklyWeather]);

  if (isFetching) {
    return <SummarySkeleton />;
  }

  return (
    <>
      <p className="break-keep">{data?.current.condition.text}</p>
      {weatherInfo && (
        <p className="relative left-2">
          최고: {weatherInfo.maxtemp_c ?? '-'}° 최저: {weatherInfo.mintemp_c ?? '-'}°
        </p>
      )}
    </>
  );
}
