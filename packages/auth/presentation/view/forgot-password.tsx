import { yupResolver } from '@hookform/resolvers/yup';
import React from 'react';
import { useForm } from 'react-hook-form';
import { View } from 'react-native';
import { useRouter } from 'react-native-auto-route';
import * as Yup from 'yup';
import { Flex, Text } from '../../../../components';
import Button from '../../../../components/button';
import InputText from '../../../../components/input/text';
import { appRoute, authRoute } from '../../../../constants/routes';
import validationMessage from '../../../../constants/validation-message';

const ForgotPasswordView = () => {
  const { navigate } = useRouter();

  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .email(validationMessage.format('email address'))
      .required(validationMessage.required('Email address')),
  });

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
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
      </View>
      <Button
        mt={16}
        label="Submit"
        onPress={() => navigate(appRoute['my-card'])}
        type="primary"
        isDisable={!isValid || isSubmitting}
        isLoading={isSubmitting && isValid}
      />
      <Flex mt={8} alignSelf="center">
        <Text size="sm">Remember your password?</Text>
        <Button.Link size="sm" onPress={() => navigate(authRoute.login)}>
          Login
        </Button.Link>
      </Flex>
    </React.Fragment>
  );
};

export default ForgotPasswordView;
