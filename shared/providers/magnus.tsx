import { FC, ReactNode } from 'react';
import { ThemeProvider } from 'react-native-magnus';
import { themes } from '../../magnus.config';

const MagnusProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <ThemeProvider theme={themes}>{children}</ThemeProvider>;
};

export default MagnusProvider;
