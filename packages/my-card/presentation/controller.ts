import { useMutation, useQuery } from '@tanstack/react-query';
import { useToast } from '../../../components/toast';
import { TResponseCode } from '../../../core/api/response';
import { useTranslations } from '../../../shared/hooks';
import queryClient from '../../../shared/query-client';
import IMyCardController from '../ports/controller';
import { Repository } from '../repository/rest';
import { UseCase } from '../usecase';

export const useMyCard = (): IMyCardController => {
  const repository = new Repository();
  const useCase = new UseCase(repository);

  const { showToast: toast } = useToast();
  const t = useTranslations('Messages');

  const profile = useQuery({
    queryKey: ['getProfile'],
    queryFn: useCase.profile,
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

  const updateProfile = useMutation({
    mutationFn: useCase.updateProfile,
    onSuccess: async ({ message, success, code }) => {
      toast({
        message: typeof message !== 'string' ? t(code?.toString() as TResponseCode) : message,
        type: success ? 'success' : 'error',
        duration: 5000,
      });

      return queryClient.invalidateQueries(['getProfile']);
    },
    onError: (error) => {
      toast({
        message: typeof error !== 'string' ? t('500') : error,
        type: 'error',
        duration: 5000,
      });
      return queryClient.invalidateQueries(['getProfile']);
    },
  });

  const updateSosmed = useMutation({
    mutationFn: useCase.updateSosmed,
    onSuccess: async ({ message, success, code }) => {
      toast({
        message: typeof message !== 'string' ? t(code?.toString() as TResponseCode) : message,
        type: success ? 'success' : 'error',
        duration: 5000,
      });

      return queryClient.invalidateQueries(['getProfile']);
    },
    onError: (error) => {
      toast({
        message: typeof error !== 'string' ? t('500') : error,
        type: 'error',
        duration: 5000,
      });
      return queryClient.invalidateQueries(['getProfile']);
    },
  });

  const changeImage = useMutation({
    mutationFn: useCase.changeImage,
    onSuccess: async ({ message, success, code }) => {
      toast({
        message: typeof message !== 'string' ? t(code?.toString() as TResponseCode) : message,
        type: success ? 'success' : 'error',
        duration: 5000,
      });

      return queryClient.invalidateQueries(['getProfile']);
    },
    onError: (error) => {
      toast({
        message: typeof error !== 'string' ? t('500') : error,
        type: 'error',
        duration: 5000,
      });
      return queryClient.invalidateQueries(['getProfile']);
    },
  });

  const createPhone = useMutation({
    mutationFn: useCase.createPhone,
    onSuccess: async ({ message, success, code }) => {
      toast({
        message: typeof message !== 'string' ? t(code?.toString() as TResponseCode) : message,
        type: success ? 'success' : 'error',
        duration: 5000,
      });

      return queryClient.invalidateQueries(['getProfile']);
    },
    onError: (error) => {
      toast({
        message: typeof error !== 'string' ? t('500') : error,
        type: 'error',
        duration: 5000,
      });
      return queryClient.invalidateQueries(['getProfile']);
    },
  });

  const updatePhone = useMutation({
    mutationFn: useCase.updatePhone,
    onSuccess: async ({ message, success, code }) => {
      toast({
        message: typeof message !== 'string' ? t(code?.toString() as TResponseCode) : message,
        type: success ? 'success' : 'error',
        duration: 5000,
      });

      return queryClient.invalidateQueries(['getProfile']);
    },
    onError: (error) => {
      toast({
        message: typeof error !== 'string' ? t('500') : error,
        type: 'error',
        duration: 5000,
      });
      return queryClient.invalidateQueries(['getProfile']);
    },
  });

  const deletePhone = useMutation({
    mutationFn: useCase.deletePhone,
    onSuccess: async ({ message, success, code }) => {
      toast({
        message: typeof message !== 'string' ? t(code?.toString() as TResponseCode) : message,
        type: success ? 'success' : 'error',
        duration: 5000,
      });

      return queryClient.invalidateQueries(['getProfile']);
    },
    onError: (error) => {
      toast({
        message: typeof error !== 'string' ? t('500') : error,
        type: 'error',
        duration: 5000,
      });
      return queryClient.invalidateQueries(['getProfile']);
    },
  });

  const createEmail = useMutation({
    mutationFn: useCase.createEmail,
    onSuccess: async ({ message, success, code }) => {
      toast({
        message: typeof message !== 'string' ? t(code?.toString() as TResponseCode) : message,
        type: success ? 'success' : 'error',
        duration: 5000,
      });

      return queryClient.invalidateQueries(['getProfile']);
    },
    onError: (error) => {
      toast({
        message: typeof error !== 'string' ? t('500') : error,
        type: 'error',
        duration: 5000,
      });
      return queryClient.invalidateQueries(['getProfile']);
    },
  });

  const updateEmail = useMutation({
    mutationFn: useCase.updateEmail,
    onSuccess: async ({ message, success, code }) => {
      toast({
        message: typeof message !== 'string' ? t(code?.toString() as TResponseCode) : message,
        type: success ? 'success' : 'error',
        duration: 5000,
      });

      return queryClient.invalidateQueries(['getProfile']);
    },
    onError: (error) => {
      toast({
        message: typeof error !== 'string' ? t('500') : error,
        type: 'error',
        duration: 5000,
      });
      return queryClient.invalidateQueries(['getProfile']);
    },
  });

  const deleteEmail = useMutation({
    mutationFn: useCase.deleteEmail,
    onSuccess: async ({ message, success, code }) => {
      toast({
        message: typeof message !== 'string' ? t(code?.toString() as TResponseCode) : message,
        type: success ? 'success' : 'error',
        duration: 5000,
      });

      return queryClient.invalidateQueries(['getProfile']);
    },
    onError: (error) => {
      toast({
        message: typeof error !== 'string' ? t('500') : error,
        type: 'error',
        duration: 5000,
      });
      return queryClient.invalidateQueries(['getProfile']);
    },
  });

  const createWebsite = useMutation({
    mutationFn: useCase.createWebsite,
    onSuccess: async ({ message, success, code }) => {
      toast({
        message: typeof message !== 'string' ? t(code?.toString() as TResponseCode) : message,
        type: success ? 'success' : 'error',
        duration: 5000,
      });

      return queryClient.invalidateQueries(['getProfile']);
    },
    onError: (error) => {
      toast({
        message: typeof error !== 'string' ? t('500') : error,
        type: 'error',
        duration: 5000,
      });
      return queryClient.invalidateQueries(['getProfile']);
    },
  });

  const updateWebsite = useMutation({
    mutationFn: useCase.updateWebsite,
    onSuccess: async ({ message, success, code }) => {
      toast({
        message: typeof message !== 'string' ? t(code?.toString() as TResponseCode) : message,
        type: success ? 'success' : 'error',
        duration: 5000,
      });

      return queryClient.invalidateQueries(['getProfile']);
    },
    onError: (error) => {
      toast({
        message: typeof error !== 'string' ? t('500') : error,
        type: 'error',
        duration: 5000,
      });
      return queryClient.invalidateQueries(['getProfile']);
    },
  });

  const deleteWebsite = useMutation({
    mutationFn: useCase.deleteWebsite,
    onSuccess: async ({ message, success, code }) => {
      toast({
        message: typeof message !== 'string' ? t(code?.toString() as TResponseCode) : message,
        type: success ? 'success' : 'error',
        duration: 5000,
      });

      return queryClient.invalidateQueries(['getProfile']);
    },
    onError: (error) => {
      toast({
        message: typeof error !== 'string' ? t('500') : error,
        type: 'error',
        duration: 5000,
      });
      return queryClient.invalidateQueries(['getProfile']);
    },
  });

  return {
    profile,
    updateProfile,
    updateSosmed,
    changeImage,
    createPhone,
    deletePhone,
    updatePhone,
    createEmail,
    createWebsite,
    deleteEmail,
    deleteWebsite,
    updateEmail,
    updateWebsite,
  };
};
