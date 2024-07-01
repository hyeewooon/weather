'use client';

import useForecastInfo from './useForecastInfo';
import WeeklyInfo from './weeklyInfo';

export default function ForecastInfo() {
  const {} = useForecastInfo();

  return (
    <section>
      <WeeklyInfo />
    </section>
  );
}
