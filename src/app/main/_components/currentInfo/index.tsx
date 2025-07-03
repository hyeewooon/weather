import { Suspense } from 'react';

import Dropdown from './dropdown';
import Temp from './temp';
import Summary from './summary';

import TempSkeleton from './skeleton/tempSkeleton';
import SummarySkeleton from './skeleton/summarySkeleton';

export default function CurrentInfo() {
  return (
    <section className="flex justify-between min-h-[120px] p-5">
      <div className="flex-none">
        <Dropdown />

        <Suspense fallback={<TempSkeleton />}>
          <Temp />
        </Suspense>
      </div>

      <div className="flex-none max-w-[200px] ml-5 text-end content-end break-words">
        <Suspense fallback={<SummarySkeleton />}>
          <Summary />
        </Suspense>
      </div>
    </section>
  );
}
