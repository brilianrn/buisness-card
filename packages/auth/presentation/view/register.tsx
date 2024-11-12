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

const RegisterView = () => {
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
          type="email-address"
          label="Fullname"
          control={control}
          name="email"
          placeholder="Insert fullname address"
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
        <InputText
          placeholder="Input confirm password"
          type="default"
          label="Confirm Password"
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
        label="Submit"
        onPress={() => navigate(authRoute.login)}
        type="primary"
        isDisable={!isValid || isSubmitting}
        isLoading={isSubmitting && isValid}
        mt={16}
      />
      <Flex mt={8} alignSelf="center">
        <Text size="sm">Do you have an account?</Text>
        <Button.Link size="sm" onPress={() => navigate(authRoute.login)}>
          Login
        </Button.Link>
      </Flex>
    </React.Fragment>
  );
};

export default RegisterView;
