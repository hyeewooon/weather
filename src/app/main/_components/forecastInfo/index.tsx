import { Suspense } from 'react';

import HourlyInfo from './hourlyInfo';
import WeeklyInfo from './weeklyInfo';

import WeeklySkeleton from './skeleton/weeklySkeleton';

export default function ForecastInfo() {
  return (
    <section>
      <div className="min-h-[134px] p-5 overflow-y-scroll scrollbar-hide">
        <Suspense fallback={<WeeklySkeleton />}>
          <WeeklyInfo />
        </Suspense>
      </div>

      <Suspense>
        <HourlyInfo />
      </Suspense>
    </section>
  );
}
