import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import { getForecastInfo } from '../_api/weather';

type LocationInfo = {
  cityName: string;
  lat: number;
  lng: number;
  days: number;
};

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

function useGetForecastInfo(
  params: LocationInfo,
  queryOptions?: Omit<UseQueryOptions, 'queryKey' | 'queryFn'>,
) {
  const query = useQuery({
    queryKey: ['getForecast', params.cityName],
    queryFn: () =>
      getForecastInfo({
        key: API_KEY ?? '',
        q: `${params.lat},${params.lng}`,
        days: params.days,
        lang: 'ko',
      }),
    ...queryOptions,
  });

  return query;
}

export default useGetForecastInfo;
