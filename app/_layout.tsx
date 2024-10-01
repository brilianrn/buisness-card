import { Stack } from 'react-native-auto-route';
import { ThemeProvider } from 'react-native-magnus';
import { appRoute } from '../constants/routes';
import { themes } from '../magnus.config';

const RootLayout = () => {
  return (
    <ThemeProvider theme={themes}>
      <Stack initialRouteName={appRoute['(app)']} screenOptions={{ headerShown: false }} />
    </ThemeProvider>
  );
};

export default RootLayout;
