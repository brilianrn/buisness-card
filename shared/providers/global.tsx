import { QueryClientProvider } from '@tanstack/react-query';
import { FC, ReactNode } from 'react';
import { ToastProvider } from '../../components/toast';
import queryClientState from '../query-client';

const GlobalProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClientState}>
      <ToastProvider>{children}</ToastProvider>
    </QueryClientProvider>
  );
};

export default GlobalProvider;
