import { yupResolver } from '@hookform/resolvers/yup';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { useRouter } from 'react-native-auto-route';
import * as Yup from 'yup';
import { IconEye, IconEyeOff } from '../../../../assets/icons/auth';
import { Flex, Text } from '../../../../components';
import Button from '../../../../components/button';
import InputText from '../../../../components/input/text';
import { authRoute } from '../../../../constants/routes';
import validationMessage from '../../../../constants/validation-message';
import { ILoginPayload } from '../../domain/request';
import { useAuth } from '../controller';

const LoginView = () => {
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const { navigate } = useRouter();

  const {
    login: { mutate: onSubmit, isLoading },
  } = useAuth();

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
  } = useForm<ILoginPayload>({
    mode: 'onChange',
    resolver: yupResolver(validationSchema),
  });

  return (
    <React.Fragment>
      <View style={{ display: 'flex', flex: 1, gap: 16 }}>
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
      <Button.Link
        size="sm"
        alignSelf="flex-end"
        mt={8}
        mb={16}
        onPress={() => navigate(authRoute['forgot-password'])}>
        Forgot password?
      </Button.Link>
      <Button
        label="Login"
        onPress={handleSubmit((body) => onSubmit(body))}
        type="primary"
        isDisable={!isValid || isSubmitting}
        isLoading={isValid && isLoading}
      />
      <Flex mt={8} alignSelf="center">
        <Text size="sm">Don't have an account?</Text>
        <Button.Link size="sm" onPress={() => navigate(authRoute.register)}>
          Register
        </Button.Link>
      </Flex>
    </React.Fragment>
  );
};

export default LoginView;
