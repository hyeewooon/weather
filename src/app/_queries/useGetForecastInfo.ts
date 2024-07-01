import { useQuery, type UseQueryOptions } from '@tanstack/react-query';

import { getForecastInfo } from '../_api/weather';
import { ForecastResponse } from '../_api/weather/model';

type LocationInfo = {
  id: string;
  cityName: string;
  lat: number;
  lng: number;
  days: number;
};

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;

function useGetForecastInfo(
  params: LocationInfo,
  queryOptions?: Omit<
    UseQueryOptions<unknown, Error, ForecastResponse, string[]>,
    'queryKey' | 'queryFn' | 'enabled'
  >,
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
    enabled: params.id !== '',
    ...queryOptions,
  });

  return query;
}

export default useGetForecastInfo;
