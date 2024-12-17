import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { Button, Card, Div, Flex, Icon, InputText, Text } from '../../../../../../components';
import { cDark, cPrimary } from '../../../../../../shared/styles/colors';
import { IFormPortofolio } from '../../../dto/request';
import { validationFormPortofolio } from '../../../dto/validation-form';

const FormPortofolio = () => {
  const {
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm<IFormPortofolio>({
    mode: 'onChange',
    resolver: yupResolver(validationFormPortofolio),
  });

  const onSubmit = async (value: string) => {
    console.log(value, ' HALOO');
  };

  return (
    <Card
      p={0}
      pb={16}
      mt="lg"
      shadow="sm"
      position="relative"
      flexDir="column"
      gap={12}
      px={16}
      pt={16}>
      <Div
        py={16}
        w="100%"
        bg={cDark[100]}
        rounded="lg"
        borderWidth={1}
        borderColor={cDark[400]}
        borderStyle="dashed"
        alignItems="center"
        justifyContent="center">
        <Icon.FA name="cloud-upload" size={48} color={cPrimary.default} />
        <Text size="md">Upload here</Text>
        <Text weight="bold" size="md">
          .png, .jpg up to 5MB
        </Text>
      </Div>
      <InputText
        useInsideLabel
        type="default"
        label="Filename"
        control={control}
        errorMessage={errors?.filename?.message?.toString()}
        name="filename"
        editInModal
        watch={watch}
        onSubmit={onSubmit}
      />
      <InputText
        useInsideLabel
        editInModal
        type="textarea"
        label="Description"
        watch={watch}
        control={control}
        errorMessage={errors?.description?.message?.toString()}
        name="?.description"
      />
      <Flex type="between" gap={8}>
        <Flex.Between>
          <Button size="sm" label="Reset" type="outline-danger" />
        </Flex.Between>
        <Flex.Between>
          <Button size="sm" label="Upload" type="primary" />
        </Flex.Between>
      </Flex>
    </Card>
  );
};

export default FormPortofolio;
