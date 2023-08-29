import React, { FunctionComponent, ReactNode } from 'react';

import { QueryClient as ReactQueryClient, QueryClientProvider } from '@tanstack/react-query';

interface QueryClientProps {
  children: ReactNode;
}
const TAG = 'QueryClient';
const queryClient = new ReactQueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 1000 * 60 * 5, // 5 minutes
      refetchOnWindowFocus: false,
      keepPreviousData: true,
    },
  },
});
const QueryClient: FunctionComponent<QueryClientProps> = ({ children }) => (
  <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
);
QueryClient.displayName = TAG;
export default QueryClient;
