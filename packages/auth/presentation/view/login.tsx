import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { useRouter } from 'react-native-auto-route';
import * as Yup from 'yup';
import { IconEye, IconEyeOff } from '../../../../assets/icons/auth';
import { Icon } from '../../../../assets/images';
import Button from '../../../../components/button';
import Image from '../../../../components/image';
import InputText from '../../../../components/input/text';
import { appRoute } from '../../../../constants/routes';
import validationMessage from '../../../../constants/validation-message';
import { cPrimary } from '../../../../shared/styles/colors';
import { ILoginBody } from '../dto/request';

const LoginView = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { navigate } = useRouter();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(validationMessage.format('email address'))
      .required(validationMessage.required('Email address')),
    password: Yup.string().required(validationMessage.required('Password')),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ILoginBody>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });
  return (
    <React.Fragment>
      <Image
        src={Icon}
        height={200}
        width={200}
        style={{
          borderRadius: 100,
          marginBottom: 48,
          borderWidth: 1,
          borderColor: cPrimary.default,
        }}
      />
      <View style={{ display: 'flex', flex: 1, gap: 16, marginBottom: 48 }}>
        <InputText
          type="email-address"
          label="Email"
          control={control}
          name="email"
          placeholder="Insert email address"
          errorMessage={errors?.email?.message?.toString()}
        />
        <InputText
          placeholder="Input password"
          type="default"
          label="Password"
          control={control}
          name="password"
          secureTextEntry={!showPassword}
          errorMessage={errors?.password?.message?.toString()}
          icon={!showPassword ? IconEye : IconEyeOff}
          iconPosition="right"
          iconOnClick={() => setShowPassword(!showPassword)}
        />
      </View>
      <Button
        label="Login"
        onPress={() => navigate(appRoute['my-card'])}
        type="primary"
        isDisable={!isValid || isSubmitting}
        isLoading={isSubmitting && isValid}
      />
    </React.Fragment>
  );
};

export default LoginView;
