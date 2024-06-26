'use client';

import { fetchData } from '../_utils/fetch';
import { useQuery } from '@tanstack/react-query';

interface Location {
  cityName: string;
  lat: number;
  lng: number;
}

const location: Record<string, Location> = {
  seoul: {
    cityName: '서울',
    lat: 37.5519,
    lng: 126.9918,
  },
  busan: {
    cityName: '부산',
    lat: 35.21,
    lng: 129.0689,
  },
};

export default function Home() {
  const { data, error, isLoading, isError, isSuccess } = useQuery({
    queryKey: ['/v1/current.json'],
    queryFn: () =>
      fetchData({
        method: 'get',
        reqPath:
          '/v1/current.json?key=5a75cfce78b84605959123850242406&q=37.4884,127.0168&aqi=no&lang=ko',
      }),
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* {data.location.name} */}
    </main>
  );
}
