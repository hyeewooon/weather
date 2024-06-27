'use client';

import useGetCurrentInfo from '../_queries/useGetCurrentInfo';
import useGetForecastInfo from '../_queries/useGetForecastInfo';

type Location = {
  cityName: string;
  lat: number;
  lng: number;
};

type City = 'seoul' | 'busan';

const location: Record<City, Location> = {
  seoul: {
    cityName: '서울특별시',
    lat: 37.5519,
    lng: 126.9918,
  },
  busan: {
    cityName: '부산광역시',
    lat: 35.21,
    lng: 129.0689,
  },
};

export default function Home() {
  const { data, error, isLoading, isError, isSuccess } = useGetCurrentInfo(
    location['seoul'],
  );

  useGetForecastInfo(
    {
      ...location['seoul'],
      days: 7,
    },
    {
      staleTime: 1000 * 60 * 60 * 4,
    },
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* {data.location.name} */}
    </main>
  );
}
