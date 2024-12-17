import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import {
  Button,
  Card,
  Div,
  Flex,
  Icon,
  Image,
  InputFile,
  InputText,
  Text,
} from '../../../../../../components';
import { useShares } from '../../../../../../shared/hooks';
import { cDark, cPrimary } from '../../../../../../shared/styles/colors';
import { IDataProfile } from '../../../../domain/response';
import { useMyCard } from '../../../controller';
import { IProfileEdit } from '../../../dto/request';
import { validationProfile } from '../../../dto/validation-form';

const ProfileEdit: FC<{ data: IDataProfile }> = ({ data }) => {
  const { copyText, shareContent } = useShares();

  const {
    updateProfile: { mutateAsync: updateProfile, isLoading: profileUpdating, variables: profile },
    updateSosmed: { mutateAsync: updateSosmed, isLoading: sosmedUpdating, variables: sosmed },
    changeImage: { mutateAsync: updateImage, isLoading: imageUpdating, variables: image },
  } = useMyCard();

  const {
    control,
    reset,
    watch,
    formState: { errors },
  } = useForm<IProfileEdit>({
    mode: 'onChange',
    resolver: yupResolver(validationProfile),
  });

  useEffect(() => {
    if (data) {
      reset({
        ...data,
        ...data?.sosial_network,
      });
    }
  }, [data]);

  return (
    <Card p={0} mt="lg" shadow="sm" position="relative" flexDir="column" gap={12}>
      <Div position="relative">
        {data?.url_background ? (
          <Image
            height={96}
            style={{ borderTopRightRadius: 8, borderTopLeftRadius: 8, resizeMode: 'cover' }}
            width="100%"
            src={{ uri: data?.url_background || '' }}
          />
        ) : (
          <Div h={96} w="100%" bg={cDark[200]} roundedTop={8} />
        )}
        <InputFile
          onSubmit={async (value) => await updateImage(value)}
          control={control}
          name="url_img"
          alignItems="center"
          mt={-32}
        />
      </Div>
      <Div flexDir="column" gap={8} px={16} pb={16}>
        <InputText
          useInsideLabel
          isLoading={profileUpdating && profile?.prefix === 'full_name'}
          type="default"
          label="Fullname"
          control={control}
          name="full_name"
          errorMessage={errors?.full_name?.message?.toString()}
          editInModal
          watch={watch}
          onSubmit={async (value) => await updateProfile({ value, prefix: 'full_name' })}
        />
        <InputText
          useInsideLabel
          isLoading={profileUpdating && profile?.prefix === 'description'}
          editInModal
          type="textarea"
          label="Description"
          watch={watch}
          control={control}
          name="description"
          onSubmit={async (value) => await updateProfile({ value, prefix: 'description' })}
          errorMessage={errors?.description?.message?.toString()}
        />
        <Div
          bg={cPrimary[100]}
          w="100%"
          py={8}
          px={16}
          rounded={12}
          flexDir="row"
          alignItems="center"
          justifyContent="space-between"
          mt={8}
          onPress={() => copyText(`dcp/users/${data?.full_name}`)}>
          <Text size="md" color="primary" tone="default">
            dcp/users/{data?.full_name}
          </Text>
          <Div bg={cPrimary.default} rounded={8} p={6} alignSelf="flex-end" alignItems="flex-end">
            <Icon.FA name="paperclip" color="white" size={16} />
          </Div>
        </Div>
        <Flex type="between" borderBottomWidth={1} borderBottomColor={cDark[200]} pb={12} gap={8}>
          <Flex.Between>
            <Button
              size="sm"
              icon="share-alt"
              iconPosition="left"
              iconSize={16}
              iconColor="white"
              label="Share"
              type="primary"
              onPress={() => shareContent(`dcp/users/${data?.full_name}`)}
            />
          </Flex.Between>
          <Flex.Between>
            <Button
              size="sm"
              icon="globe"
              iconPosition="left"
              iconSize={16}
              iconColor={cPrimary.default}
              label="Cek Viewer"
              type="outline-primary"
            />
          </Flex.Between>
        </Flex>
        <Text weight="bold" size="lg">
          Social Networks
        </Text>
        <InputText
          icon="instagram"
          iconType="icon"
          iconStyle={{
            backgroundColor: '#E94375',
            borderRadius: 50,
            padding: 8,
            alignItems: 'center',
            flex: 1,
          }}
          iconSize={20}
          iconColor="white"
          iconPosition="left"
          useInsideLabel
          type="default"
          label="Instagram"
          control={control}
          name="instagram"
          errorMessage={errors?.instagram?.message?.toString()}
          editInModal
          watch={watch}
          isLoading={sosmedUpdating && sosmed?.prefix === 'instagram'}
          onSubmit={async (value) => await updateSosmed({ value, prefix: 'instagram' })}
        />
        <InputText
          icon="twitter"
          iconType="icon"
          iconStyle={{
            backgroundColor: 'black',
            borderRadius: 50,
            padding: 8,
            alignItems: 'center',
            flex: 1,
          }}
          iconSize={20}
          iconColor="white"
          iconPosition="left"
          useInsideLabel
          type="default"
          label="Twitter"
          control={control}
          name="twitter"
          errorMessage={errors?.twitter?.message?.toString()}
          editInModal
          watch={watch}
          isLoading={sosmedUpdating && sosmed?.prefix === 'twitter'}
          onSubmit={async (value) => await updateSosmed({ value, prefix: 'twitter' })}
        />
        <InputText
          icon="linkedin"
          iconType="icon"
          iconStyle={{
            backgroundColor: '#027FB1',
            borderRadius: 50,
            padding: 8,
            alignItems: 'center',
            flex: 1,
          }}
          iconSize={20}
          iconColor="white"
          iconPosition="left"
          useInsideLabel
          type="default"
          label="LinkedIn"
          control={control}
          name="linkedin"
          errorMessage={errors?.linkedin?.message?.toString()}
          editInModal
          watch={watch}
          isLoading={sosmedUpdating && sosmed?.prefix === 'linkedin'}
          onSubmit={async (value) => await updateSosmed({ value, prefix: 'linkedin' })}
        />
      </Div>
    </Card>
  );
};

export default ProfileEdit;
