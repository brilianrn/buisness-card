import { Card, For, Image, Text } from '../../../../../components';
import { cDark } from '../../../../../shared/styles/colors';

const Contact = () => {
  return (
    <Card p="xl" alignItems="flex-start">
      <For count={3} gap={12}>
        <Image.Avatar
          alignItems="center"
          height={48}
          width={48}
          color="white"
          src="RN"
          labelPosition="right"
          alignSelf="center"
          bg={cDark[400]}
          rounded="lg"
          style={{ backgroundColor: cDark.darker, borderRadius: 0 }}>
          <Text size="md" ml="lg">
            Email
          </Text>
        </Image.Avatar>
      </For>
    </Card>
  );
};

export default Contact;
