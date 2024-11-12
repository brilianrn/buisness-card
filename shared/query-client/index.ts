import { QueryClient } from '@tanstack/react-query';

export default new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000 * 60, // 1 hour
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});
