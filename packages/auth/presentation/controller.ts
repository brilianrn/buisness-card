import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'react-native-auto-route';
import { useToast } from '../../../components/toast';
import { appRoute } from '../../../constants/routes';
import { setAuthorizationHeader } from '../../../core/api/utils';
import { useTranslations } from '../../../shared/hooks';
import { _removeData, _storeData } from '../../../shared/local-storage';
import { ILoginBody } from '../../my-card/presentation/dto/request';
import { Repository as MyCardRepository } from '../../my-card/repository/rest';
import { UseCase as MyCardUseCase } from '../../my-card/usecase';
import IAuthController from '../ports/controller';
import { Repository } from '../repository/rest';
import { UseCase } from '../usecase';

export const useAuth = (): IAuthController => {
  const repository = new Repository();
  const useCase = new UseCase(repository);
  const myCardRepository = new MyCardRepository();
  const myCardUseCase = new MyCardUseCase(myCardRepository);

  const { showToast: toast } = useToast();
  const t = useTranslations('Login');

  const { navigate } = useRouter();

  const login = useMutation({
    mutationFn: async (body: ILoginBody) => {
      const { result, ...res } = await useCase.login(body);
      const isSetup = await setAuthorizationHeader(result?.token);
      if (isSetup) {
        const user = await myCardUseCase.profile();
        if (!user?.success) {
          return { ...res, result, success: false, message: user?.message };
        }
        const success = await _storeData({ storeKey: 'token', storeValue: result?.token || '' });
        if (!success) {
          return { ...res, result, success: false, message: JSON.stringify(t('fail')) };
        }
        const successUser = await _storeData({
          storeKey: 'user',
          storeValue: JSON.stringify(user?.result),
        });
        if (!successUser) {
          await _removeData('token');
          return { ...res, result, success: false, message: JSON.stringify(t('fail')) };
        }
      }
      return { ...res, result };
    },
    onSuccess: async ({ message, success }) => {
      if (!success) {
        return toast({
          message: typeof message !== 'string' ? t('fail') : message,
          type: 'error',
          duration: 5000,
        });
      }
      return navigate(appRoute['my-card']);
    },
    onError: (error) => {
      toast({
        message: typeof error !== 'string' ? t('fail') : error,
        type: 'error',
        duration: 5000,
      });
    },
  });

  return { login };
};
