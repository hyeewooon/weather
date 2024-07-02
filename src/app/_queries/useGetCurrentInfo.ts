import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import { getCurrentInfo } from '../_api/weather';

import type { CurrentResponse } from '../_api/weather/model';

type LocationInfo = {
  id: string;
  cityName: string;
  lat: number;
  lng: number;
};

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

function useGetCurrentInfo(
  params: LocationInfo,
  queryOptions?: Omit<
    UseQueryOptions<unknown, Error, CurrentResponse, string[]>,
    'queryKey' | 'queryFn' | 'enabled'
  >,
) {
  const query = useQuery({
    queryKey: ['getCurrent', params.cityName],
    queryFn: () => {
      return getCurrentInfo({
        key: API_KEY ?? '',
        q: `${params.lat},${params.lng}`,
        lang: 'ko',
      });
    },
    enabled: params.id !== '',
    ...queryOptions,
  });

  return query;
}

export default useGetCurrentInfo;
