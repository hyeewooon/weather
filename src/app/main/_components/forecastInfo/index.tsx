'use client';

import HourlyInfo from './hourlyInfo';
import useForecastInfo from './useForecastInfo';
import WeeklyInfo from './weeklyInfo';

export default function ForecastInfo() {
  useForecastInfo();

  return (
    <section>
      <WeeklyInfo />
      <HourlyInfo />
    </section>
  );
}
