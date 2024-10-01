import { ReactNative } from '../../../../../assets/icons/main';
import { Card, Flex, Image, Text } from '../../../../../components';
import { cDark } from '../../../../../shared/styles/colors';

const Profile = () => {
  return (
    <Card p="xl" mt="lg">
      <Image
        src={ReactNative}
        height={48}
        width={48}
        style={{ borderRadius: 100, backgroundColor: cDark.darker }}
      />
      <Flex type="start" gap={8} style={{ marginTop: 20 }}>
        <Text size="lg" weight="bold">
          Nama
        </Text>
        <Text size="lg" weight="normal">
          Jabatan
        </Text>
      </Flex>
      <Text size="md" style={{ marginTop: 8 }} numberOfLines={3}>
        It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English. Many desktop publishing packages and web page
        editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose (injected humour and the like).
      </Text>
      <Flex type="start" gap={8} style={{ marginTop: 36 }}>
        <Image
          src={ReactNative}
          height={48}
          width={48}
          style={{ backgroundColor: cDark.darker, borderRadius: 8 }}
        />
        <Image
          src={ReactNative}
          height={48}
          width={48}
          style={{ backgroundColor: cDark.darker, borderRadius: 8 }}
        />
      </Flex>
    </Card>
  );
};

export default Profile;
