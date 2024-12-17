import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Card, Div, EmptyState, Icon, InputText, Text } from '../../../../../../components';
import { cDanger, cDark, cPrimary } from '../../../../../../shared/styles/colors';
import { IDataProfile } from '../../../../domain/response';
import { useMyCard } from '../../../controller';
import { IContactInformation } from '../../../dto/request';
import { validationContactInformation } from '../../../dto/validation-form';

const ContactEdit: FC<{ data: IDataProfile }> = ({ data }) => {
  const {
    control,
    reset,
    watch,
    setValue,
    formState: { errors },
  } = useForm<IContactInformation>({
    mode: 'onChange',
    resolver: yupResolver(validationContactInformation),
  });

  const {
    createPhone: { mutateAsync: createPhone },
    updatePhone: { mutateAsync: updatePhone },
    deletePhone: { mutateAsync: deletePhone },
    createEmail: { mutateAsync: createEmail },
    updateEmail: { mutateAsync: updateEmail },
    deleteEmail: { mutateAsync: deleteEmail },
    createWebsite: { mutateAsync: createWebsite },
    updateWebsite: { mutateAsync: updateWebsite },
    deleteWebsite: { mutateAsync: deleteWebsite },
  } = useMyCard();

  useEffect(() => {
    reset({
      ...data,
      contact: data?.contact?.map((e, i) => ({
        ...e,
        increment_id: i + 1,
      })),
      email: data?.email?.map((e, i) => ({
        ...e,
        increment_id: i + 1,
      })),
      website: data?.website?.map((e, i) => ({
        ...e,
        increment_id: i + 1,
      })),
    });
  }, [data]);

  const onIncreaseData = (key: keyof IContactInformation) => {
    switch (key) {
      case 'contact':
        const phones = watch('contact');
        return setValue('contact', [
          ...(phones || []),
          {
            phone_number: '',
            increment_id:
              phones?.length && typeof phones[phones?.length - 1]?.increment_id === 'number'
                ? Number(phones[phones?.length - 1]?.increment_id) + 1
                : 1,
          },
        ]);
      case 'email':
        const emails = watch('email');
        return setValue('email', [
          ...(emails || []),
          {
            address: '',
            increment_id:
              emails?.length && typeof emails[emails?.length - 1]?.increment_id === 'number'
                ? Number(emails[emails?.length - 1]?.increment_id) + 1
                : 1,
          },
        ]);
      case 'website':
        const urls = watch('website');
        return setValue('website', [
          ...(urls || []),
          {
            link: '',
            increment_id:
              urls?.length && typeof urls[urls?.length - 1]?.increment_id === 'number'
                ? Number(urls[urls?.length - 1]?.increment_id) + 1
                : 1,
          },
        ]);
    }
  };

  const onSubmit = async (key: keyof IContactInformation, value: string, id?: string) => {
    switch (key) {
      case 'contact':
        await (id
          ? updatePhone({ id, phone_number: value })
          : createPhone({ phone_number: value }));
        break;
      case 'email':
        await (id ? updateEmail({ id, address: value }) : createEmail({ address: value }));
        break;
      case 'website':
        await (id ? updateWebsite({ id, link: value }) : createWebsite({ link: value }));
        break;
    }
  };

  return (
    <Card p={0} pb={16} mt="lg" shadow="sm" position="relative" flexDir="column" gap={12}>
      <Text size="lg" weight="bold" p={16} borderBottomWidth={1} borderBottomColor={cDark[200]}>
        Contact Information
      </Text>
      <Div flexDir="row" alignItems="center" justifyContent="space-between" px={16}>
        <Text size="lg" weight="bold">
          Phone Numbers
        </Text>
        <Div bg={cPrimary[100]} p={8} rounded={12} onPress={() => onIncreaseData('contact')}>
          <Icon.FA name="plus-circle" color={cPrimary.default} size={20} />
        </Div>
      </Div>
      {watch('contact')?.length ? (
        <Div px={16} gap={8}>
          {watch('contact')?.map((e, i) => (
            <InputText
              required
              key={i}
              icon="phone"
              iconType="icon"
              iconSize={20}
              iconColor={cDark[400]}
              iconPosition="left"
              icon2nd="trash"
              iconType2nd="icon"
              iconSize2nd={20}
              iconColor2nd={cDanger.default}
              iconPosition2nd="right"
              iconOnClick2nd={async () => {
                e?.id && (await deletePhone(e?.id));
                setValue(
                  'contact',
                  watch('contact')?.filter((el) => el?.increment_id !== e?.increment_id)
                );
              }}
              iconStyle2nd={{ backgroundColor: cDanger[200], padding: 8, borderRadius: 8 }}
              useInsideLabel
              type="number-pad"
              label={`Phone Number ${e?.increment_id}`}
              control={control}
              name={`contact.${i}.phone_number`}
              errorMessage={errors?.contact?.[i]?.message?.toString()}
              editInModal
              watch={watch}
              onSubmit={async (value) => await onSubmit('contact', value, e?.id)}
            />
          ))}
        </Div>
      ) : (
        <EmptyState
          message="Phone numbers not found"
          actionButton="Add New Phone Number"
          onAction={() => onIncreaseData('contact')}
          actionWidth="70%"
        />
      )}
      <Div
        flexDir="row"
        borderTopWidth={1}
        borderTopColor={cDark[200]}
        alignItems="center"
        justifyContent="space-between"
        pt={16}
        mx={16}
        mt={20}>
        <Text size="lg" weight="bold">
          Email
        </Text>
        <Div bg={cPrimary[100]} p={8} rounded={12} onPress={() => onIncreaseData('email')}>
          <Icon.FA name="plus-circle" color={cPrimary.default} size={20} />
        </Div>
      </Div>
      {watch('email')?.length ? (
        <Div px={16} gap={8}>
          {watch('email')?.map((e, i) => (
            <InputText
              required
              key={i}
              icon="envelope-o"
              iconType="icon"
              iconSize={20}
              iconColor={cDark[400]}
              iconPosition="left"
              icon2nd="trash"
              iconType2nd="icon"
              iconSize2nd={20}
              iconColor2nd={cDanger.default}
              iconPosition2nd="right"
              iconOnClick2nd={async () => {
                e?.id && (await deleteEmail(e?.id));
                setValue(
                  'email',
                  watch('email')?.filter((el) => el?.increment_id !== e?.increment_id)
                );
              }}
              iconStyle2nd={{ backgroundColor: cDanger[200], padding: 8, borderRadius: 8 }}
              useInsideLabel
              type="default"
              label={`Email ${e?.increment_id}`}
              control={control}
              name={`email.${i}.address`}
              errorMessage={errors?.email?.[i]?.message?.toString()}
              editInModal
              watch={watch}
              onSubmit={async (value) => await onSubmit('email', value, e?.id)}
            />
          ))}
        </Div>
      ) : (
        <EmptyState
          message="Email not found"
          actionButton="Add New Email"
          onAction={() => onIncreaseData('email')}
          actionWidth="50%"
        />
      )}
      <Div
        flexDir="row"
        borderTopWidth={1}
        borderTopColor={cDark[200]}
        alignItems="center"
        justifyContent="space-between"
        pt={16}
        mx={16}
        mt={20}>
        <Text size="lg" weight="bold">
          URLs
        </Text>
        <Div bg={cPrimary[100]} p={8} rounded={12} onPress={() => onIncreaseData('website')}>
          <Icon.FA name="plus-circle" color={cPrimary.default} size={20} />
        </Div>
      </Div>
      {watch('website')?.length ? (
        <Div px={16} gap={8}>
          {watch('website')?.map((e, i) => (
            <InputText
              required
              key={i}
              icon="globe"
              iconType="icon"
              iconSize={20}
              iconColor={cDark[400]}
              iconPosition="left"
              icon2nd="trash"
              iconType2nd="icon"
              iconSize2nd={20}
              iconColor2nd={cDanger.default}
              iconPosition2nd="right"
              iconOnClick2nd={async () => {
                e?.id && (await deleteWebsite(e?.id));
                setValue(
                  'website',
                  watch('website')?.filter((el) => el?.increment_id !== e?.increment_id)
                );
              }}
              iconStyle2nd={{ backgroundColor: cDanger[200], padding: 8, borderRadius: 8 }}
              useInsideLabel
              type="default"
              label={`Link URL ${e?.increment_id}`}
              control={control}
              name={`website.${i}.link`}
              errorMessage={errors?.website?.[i]?.message?.toString()}
              editInModal
              watch={watch}
              onSubmit={async (value) => await onSubmit('website', value, e?.id)}
            />
          ))}
        </Div>
      ) : (
        <EmptyState
          message="Link URL not found"
          actionButton="Add New Link URL"
          onAction={() => onIncreaseData('website')}
          actionWidth="60%"
        />
      )}
    </Card>
  );
};

export default ContactEdit;
