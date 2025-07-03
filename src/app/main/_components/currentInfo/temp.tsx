'use client';

import { useLocationStore } from '@/app/_store/location';
import useGetCurrentInfo from '@/app/_queries/useGetCurrentInfo';
import TempSkeleton from './skeleton/tempSkeleton';

export default function Temp() {
  const location = useLocationStore((state) => state.location);

  const { data, isFetching } = useGetCurrentInfo(location);

  if (isFetching) {
    return <TempSkeleton />;
  }

  return (
    <p className="text-[32px]">{data?.current.temp_c ? `${data.current.temp_c}°` : ''}</p>
  );
}
