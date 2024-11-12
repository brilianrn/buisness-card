import { Stack } from 'react-native-auto-route';
import { appRoute } from '../constants/routes';
import { GlobalProvider, MagnusProvider } from '../shared/providers';

const RootLayout = () => {
  return (
    <GlobalProvider>
      <MagnusProvider>
        <Stack initialRouteName={appRoute['(app)']} screenOptions={{ headerShown: false }} />
      </MagnusProvider>
    </GlobalProvider>
  );
};

export default RootLayout;
