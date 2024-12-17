import Clipboard from '@react-native-clipboard/clipboard';
import { Share } from 'react-native';
import { useToast } from '../../components/toast';
import logger from '../logger';
import useTranslations from './use-translation';

const useShares = () => {
  const { showToast: toast } = useToast();
  const t = useTranslations('MyCard');

  const copyText = (text: string, name?: string) => {
    try {
      Clipboard.setString(text || 'Hello world');
      toast({ message: t('copySuccessfully', { name: name || 'Text' }), type: 'success' });
    } catch (error) {
      logger(`Copy Text - ${text}`, error);
      toast({ message: t('copyFailed', { name: name || 'Text' }), type: 'error' });
    }
  };

  const shareContent = async (url: string, message?: string) => {
    try {
      const result = await Share.share({
        url,
        message: message || 'Share',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
      }
    } catch (error: any) {
      logger(`Share Content`, error);
      toast({ message: t('shareFailed'), type: 'error' });
    }
  };

  return { copyText, shareContent };
};

export default useShares;
