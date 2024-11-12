import { FC, ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'react-native-auto-route';
import { authRoute } from '../../constants/routes';
import { _retrieveData } from '../../shared/local-storage';
import SplashScreen from '../splash-screen';

const PrivateRoute: FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoadingSession, setIsLoadingSession] = useState<boolean>(true);

  const { replace } = useRouter();

  useEffect(() => {
    (async () => {
      const token = await _retrieveData('token');
      if (!token) replace(authRoute.login);
      setIsLoadingSession(false);
    })();
  }, []);

  return isLoadingSession ? <SplashScreen /> : children;
};

export default PrivateRoute;
