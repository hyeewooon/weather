'use client';

import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  type QueryClientConfig,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { useLocationStore } from './_store/location';

const defaultQueryClientOptions: QueryClientConfig = {
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
      refetchInterval: false,
      refetchIntervalInBackground: false,
    },
  },
};

export function ReactQuery({ children }: React.PropsWithChildren) {
  const [queryClient] = useState(() => new QueryClient(defaultQueryClientOptions));

  return (
    <QueryClientProvider client={queryClient}>
      {children}

      {process.env.NODE_ENV === 'development' && (
        <ReactQueryDevtools initialIsOpen={false} buttonPosition="bottom-left" />
      )}
    </QueryClientProvider>
  );
}

// Zustand store의 hydration(브라우저 저장소 동기화)이 완료될 때까지 자식 컴포넌트를 렌더링하지 않음.
export function Hydrated({ children }: React.PropsWithChildren) {
  const isHydrated = useLocationStore((state) => state.isHydrated);

  if (!isHydrated) return null;

  return children;
}
