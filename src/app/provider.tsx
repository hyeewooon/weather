'use client';

import { useState } from 'react';
import {
  QueryClient,
  QueryClientProvider,
  type QueryClientConfig,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

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
