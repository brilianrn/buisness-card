import { Stack } from 'react-native-auto-route';
import { authRoute } from '../../constants/routes';

const AuthLayout = () => {
  return <Stack initialRouteName={authRoute.login} screenOptions={{ headerShown: false }} />;
};

export default AuthLayout;
