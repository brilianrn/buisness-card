import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Card, Div, InputText, Text } from '../../../../../../components';
import { cDark } from '../../../../../../shared/styles/colors';
import { IDataProfile } from '../../../../domain/response';
import { ICompanyInformation } from '../../../dto/request';
import { validationCompanyInformation } from '../../../dto/validation-form';

const CompanyInfoEdit: FC<{ data: IDataProfile }> = ({ data }) => {
  const {
    control,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ICompanyInformation>({
    mode: 'onChange',
    resolver: yupResolver(validationCompanyInformation),
  });

  useEffect(() => reset({ ...data?.company }), [data]);

  const onSubmit = async (value: string) => {
    console.log(value, ' HALOO');
  };

  return (
    <Card p={0} mb={16} mt="lg" shadow="sm" position="relative" flexDir="column" gap={12}>
      <Text size="lg" weight="bold" p={16} borderBottomWidth={1} borderBottomColor={cDark[200]}>
        Company Information
      </Text>
      <Div flexDir="column" gap={8} px={16} pb={16}>
        <InputText
          useInsideLabel
          type="default"
          label="Job Title"
          control={control}
          name="job_title"
          errorMessage={errors?.job_title?.message?.toString()}
          editInModal
          watch={watch}
          onSubmit={onSubmit}
        />
        <InputText
          useInsideLabel
          type="default"
          label="Company Name"
          control={control}
          errorMessage={errors?.name?.message?.toString()}
          name="name"
          editInModal
          watch={watch}
          onSubmit={onSubmit}
        />
        <InputText
          useInsideLabel
          editInModal
          type="textarea"
          label="Company Address"
          watch={watch}
          control={control}
          errorMessage={errors?.address?.message?.toString()}
          name="address"
        />
        <Div h={200} w="100%" bg={cDark[100]} rounded={12} />
      </Div>
    </Card>
  );
};

export default CompanyInfoEdit;
