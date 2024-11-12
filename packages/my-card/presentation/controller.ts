import { useMutation } from '@tanstack/react-query';
import { useToast } from '../../../components/toast';
import { TResponseCode } from '../../../core/api/response';
import { useTranslations } from '../../../shared/hooks';
import IMyCardController from '../ports/controller';
import { Repository } from '../repository/rest';
import { UseCase } from '../usecase';

export const useMyCard = (): IMyCardController => {
  const repository = new Repository();
  const useCase = new UseCase(repository);

  const { showToast: toast } = useToast();
  const t = useTranslations('Messages');

  const profile = useMutation({
    mutationFn: useCase.profile,
    onSuccess: async ({ message, success, code }) => {
      if (!success) {
        return toast({
          message: typeof message !== 'string' ? t(code?.toString() as TResponseCode) : message,
          type: 'error',
          duration: 5000,
        });
      }
    },
    onError: (error) => {
      toast({
        message: typeof error !== 'string' ? t('500') : error,
        type: 'error',
        duration: 5000,
      });
    },
  });

  return { profile };
};
