import { FC, useEffect, useState } from 'react';
import { Control, Controller } from 'react-hook-form';
import { ActivityIndicator, Image, Text, TouchableOpacity } from 'react-native';
import RNFS from 'react-native-fs';
import { launchImageLibrary } from 'react-native-image-picker';
import { useTranslations } from '../../../shared/hooks';
import logger from '../../../shared/logger';
import { cDark, cPrimary } from '../../../shared/styles/colors';
import { DivProps } from '../../../shared/types/components/div.type';
import Button from '../../button';
import Div from '../../div';
import Icon from '../../icon';
import { useToast } from '../../toast';

interface UploadImageProps extends Partial<DivProps> {
  image?: string;
  setImage?: (value: string) => void;
  label?: string;
  control?: Control<any>;
  name?: string;
  onSubmit?: (value: string) => Promise<unknown>;
}

const UploadImage: FC<UploadImageProps> = ({
  image,
  setImage,
  label,
  control,
  name,
  onSubmit,
  ...props
}) => {
  const [filename, setFilename] = useState<string>();
  const [uploading, setUploading] = useState<boolean>(false);
  const [uri, setUri] = useState<string>();

  const t = useTranslations('MyCard');

  const { showToast } = useToast();

  useEffect(() => {
    const defaultImage = control?._getWatch(name);
    if (defaultImage) setUri(defaultImage);
    else setUri(undefined);
  }, [control, name, control?._getWatch(name)]);

  const handleChoosePhoto = async (onChange?: (uri: string | null) => void) => {
    try {
      const result = await launchImageLibrary({
        mediaType: 'photo',
        includeBase64: true,
      });
      setUploading(true);
      if (!result.didCancel && result?.assets?.[0]?.uri) {
        const base64 = await RNFS.readFile(result?.assets?.[0]?.uri, 'base64');
        if (!base64) throw new Error();
        const img = `data:image/jpeg;base64,${base64}`;
        setImage && setImage(img);
        onChange && onChange(img);
        onSubmit && (await onSubmit(img));
        setFilename(result?.assets?.[0]?.fileName);
        setUri(result?.assets?.[0]?.uri);
        setUploading(false);
      } else if (result?.errorCode || result?.errorMessage) {
        throw new Error(result?.errorMessage);
      }
      setUploading(false);
    } catch (error) {
      setUploading(false);
      logger('UploadImage', error);
      showToast({ message: t('failUpload'), type: 'error' });
    }
  };

  return (
    <Div {...props}>
      {!label && control && name ? (
        <Controller
          control={control}
          name={name}
          render={({ field: { onChange } }) => (
            <TouchableOpacity
              activeOpacity={uploading ? 1 : 0.5}
              onPress={() => handleChoosePhoto(onChange)}
              style={{
                position: 'relative',
                height: 64,
                width: 64,
                borderRadius: 100 / 2,
                padding: 0,
                backgroundColor: uri ? undefined : cDark[300],
              }}>
              <Div position="absolute" bottom={0} right={0} zIndex={1}>
                {uploading ? (
                  <ActivityIndicator size="small" color={cPrimary.default} />
                ) : (
                  <Div
                    onPress={() => handleChoosePhoto(onChange)}
                    bg={cPrimary.default}
                    rounded={100}
                    p={6}
                    px={7}>
                    <Icon.FA name="pencil" size={12} color="white" />
                  </Div>
                )}
              </Div>
              {uri?.length ? (
                <Image
                  source={{ uri }}
                  style={{ height: '100%', width: '100%', borderRadius: 50 }}
                />
              ) : undefined}
            </TouchableOpacity>
          )}
        />
      ) : (
        <Div style={[{ gap: 15 }]}>
          <Button label={label || ''} type="primary" onPress={handleChoosePhoto} />
          <Text
            style={{
              fontSize: 10,
              color: cDark[600],
              width: '45%',
            }}>
            {filename}
          </Text>
        </Div>
      )}
    </Div>
  );
};

export default UploadImage;
