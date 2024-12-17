import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'react-native-auto-route';
import { useToast } from '../../../components/toast';
import { appRoute, authRoute } from '../../../constants/routes';
import { setAuthorizationHeader } from '../../../core/api/utils';
import { useTranslations } from '../../../shared/hooks';
import { _removeData, _storeData } from '../../../shared/local-storage';
import { Repository as MyCardRepository } from '../../my-card/repository/rest';
import { UseCase as MyCardUseCase } from '../../my-card/usecase';
import IAuthController from '../ports/controller';
import { Repository } from '../repository/rest';
import { UseCase } from '../usecase';
import { ILoginBody } from './dto/view';

export const useAuth = (): IAuthController => {
  const repository = new Repository();
  const useCase = new UseCase(repository);
  const myCardRepository = new MyCardRepository();
  const myCardUseCase = new MyCardUseCase(myCardRepository);

  const { showToast: toast } = useToast();
  const t = useTranslations('Auth');
  const tMessages = useTranslations('Messages');

  const { navigate } = useRouter();

  const login = useMutation({
    mutationFn: async (body: ILoginBody) => {
      const { result, ...res } = await useCase.login(body);
      const isSetup = await setAuthorizationHeader(result?.token);
      if (isSetup) {
        const success = await _storeData({ storeKey: 'token', storeValue: result?.token || '' });
        if (!success) {
          return { ...res, result, success: false, message: JSON.stringify(t('loginFail')) };
        }
      }
      return { ...res, result };
    },
    onSuccess: async ({ success }) => {
      if (!success) {
        return toast({
          message: t('loginFail'),
          type: 'error',
          duration: 5000,
        });
      }
      return navigate(appRoute['my-card']);
    },
    onError: () => {
      toast({
        message: t('loginFail'),
        type: 'error',
        duration: 5000,
      });
    },
  });

  const register = useMutation({
    mutationFn: useCase.register,
    onSuccess: async ({ success, message }) => {
      if (!success) {
        return toast({
          message: typeof message !== 'string' ? t('regisFail') : message,
          type: 'error',
          duration: 5000,
        });
      }
      toast({
        message: typeof message !== 'string' ? t('regisSuccess') : message,
        type: 'success',
        duration: 10000,
      });
      return navigate(authRoute.login);
    },
    onError: (error) => {
      toast({
        message: typeof error !== 'string' ? t('regisFail') : error,
        type: 'error',
        duration: 5000,
      });
    },
  });

  const forgotPassword = useMutation({
    mutationFn: useCase.forgotPassword,
    onSuccess: async ({ success, message }) => {
      if (!success) {
        return toast({
          message: typeof message !== 'string' ? tMessages('400') : message,
          type: 'error',
          duration: 5000,
        });
      }
      toast({
        message: typeof message !== 'string' ? t('forgotPassSuccess') : message,
        type: 'success',
        duration: 10000,
      });
      return navigate(authRoute.login);
    },
    onError: (error) => {
      toast({
        message: typeof error !== 'string' ? tMessages('400') : error,
        type: 'error',
        duration: 5000,
      });
    },
  });

  const onSignOut = async () => {
    _removeData('token').then((success) => {
      _removeData('user');
      success && navigate(authRoute.login);
    });
  };

  return { login, register, forgotPassword, onSignOut };
};
