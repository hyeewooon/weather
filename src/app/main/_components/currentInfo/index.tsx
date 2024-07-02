'use client';

import Dropdown from './dropdown';
import useCurrentInfo from './useCurrentInfo';

export default function CurrentInfo() {
  const { data, isFetched, weatherInfo } = useCurrentInfo();

  return (
    <section className="flex justify-between h-[120px] p-5">
      <div className="flex-none">
        <Dropdown />
        <p className="text-[32px]">
          {data?.current.temp_c ? `${data.current.temp_c}°` : ''}
        </p>
      </div>
      {isFetched && (
        <div className="flex-none max-w-[200px] ml-5 text-end content-end">
          <p>{data?.current.condition.text}</p>
          {weatherInfo && (
            <p className="relative left-2">
              최고: {weatherInfo.maxtemp_c ?? '-'}° 최저: {weatherInfo.mintemp_c ?? '-'}°
            </p>
          )}
        </div>
      )}
    </section>
  );
}
