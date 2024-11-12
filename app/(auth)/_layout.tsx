import { useEffect } from 'react';
import { Stack, useRouter } from 'react-native-auto-route';
import { appRoute, authRoute } from '../../constants/routes';
import { _retrieveData } from '../../shared/local-storage';

const AuthLayout = () => {
  const { replace } = useRouter();

  useEffect(() => {
    (async () => {
      await _retrieveData('token').then((success) => {
        success && replace(appRoute['my-card']);
      });
    })();
  }, []);

  return <Stack initialRouteName={authRoute.login} screenOptions={{ headerShown: false }} />;
};

export default AuthLayout;
