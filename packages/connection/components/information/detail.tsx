import { ScrollDiv } from 'react-native-magnus';
import { Card, Div, Text } from '../../../../components';
import { ContactInformation } from '../../../my-card/presentation/components';

const InformationDetail = () => {
  return (
    <ScrollDiv>
      <Div mx={16} mt={16} gap={12}>
        <Text weight="bold" size="xl">
          Contact Information
        </Text>
        <ContactInformation />
        <Div gap={8}>
          <Text weight="bold" size="xl">
            Alamat
          </Text>
          <Text size="md">Lorem Ipsum as their default model text</Text>
        </Div>
        <Card h={200} />
      </Div>
    </ScrollDiv>
  );
};

export default InformationDetail;
