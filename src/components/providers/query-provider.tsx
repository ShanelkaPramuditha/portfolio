'use client';

import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { useState } from 'react';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

export function QueryProvider({
  children,
  dehydratedState
}: {
  children: React.ReactNode;
  dehydratedState?: unknown;
}) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
