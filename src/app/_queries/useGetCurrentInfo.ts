import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import { getCurrentInfo } from '../_api/weather';

type LocationInfo = {
  cityName: string;
  lat: number;
  lng: number;
};

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

function useGetCurrentInfo(
  params: LocationInfo,
  queryOptions?: Omit<UseQueryOptions, 'queryKey' | 'queryFn'>,
) {
  const query = useQuery({
    queryKey: ['getCurrent', params.cityName],
    queryFn: () =>
      getCurrentInfo({
        key: API_KEY ?? '',
        q: `${params.lat},${params.lng}`,
        lang: 'ko',
      }),
    ...queryOptions,
  });

  return query;
}

export default useGetCurrentInfo;
