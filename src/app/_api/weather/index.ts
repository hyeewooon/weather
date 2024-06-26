import { fetchData } from '@/app/_utils/fetch';

import type {
  Request as CurrentRequest,
  CurrentResponse,
  ForecastRequest,
  ForecastResponse,
} from './model';

export const reqPaths = {
  current: `/v1/current.json`,
  forecast: '/v1/forecast.json',
} as const;

export function getCurrentInfo(formData: CurrentRequest) {
  return fetchData<CurrentResponse>({
    method: 'get',
    reqPath: reqPaths.current,
    formData,
  });
}

export function getForecastInfo(formData: ForecastRequest) {
  return fetchData<ForecastResponse>({
    method: 'get',
    reqPath: reqPaths.forecast,
    formData,
  });
}
