import { useRouter } from 'react-native-auto-route';
import {
  ICInstagram,
  ICLinkedIn,
  ICSaveWhite,
  ICShareWhite,
  ICSuitase,
  ICX,
  ReactNative,
} from '../../../../../assets/icons/main';
import { Card, Flex, Icon, Image, Text } from '../../../../../components';
import MyCardProfileCurve from '../../../../../components/shapes/my-card-profile-curve';
import { authRoute } from '../../../../../constants/routes';
import { useColor } from '../../../../../shared/hooks';
import { _removeData } from '../../../../../shared/local-storage';
import { cDark } from '../../../../../shared/styles/colors';

const Profile = () => {
  const { navigate } = useRouter();
  const { color } = useColor('primary');

  const onSignOut = async () => {
    _removeData('token').then((success) => {
      _removeData('user');
      success && navigate(authRoute.login);
    });
  };

  return (
    <Card p="xl" mt="lg" shadow="sm" position="relative">
      <Flex position="absolute" w="100%" alignSelf="center" top={20}>
        <Flex.Between style={{ alignItems: 'flex-start' }}>
          <Icon
            src={ICSaveWhite}
            height={20}
            width={20}
            shadow="sm"
            rounded={6}
            bg={color.default}
            p={8}
          />
        </Flex.Between>
        <Flex.Between style={{ alignItems: 'flex-end' }}>
          <Icon
            src={ICShareWhite}
            height={20}
            width={20}
            shadow="sm"
            rounded={6}
            bg={color.default}
            p={8}
          />
        </Flex.Between>
      </Flex>
      <MyCardProfileCurve />
      <Image
        alignItems="center"
        src={ReactNative}
        height={64}
        width={64}
        mt={16}
        style={{ borderRadius: 100, backgroundColor: cDark.darker }}
      />
      <Text size={20} weight="bold" alignItems="center" mt={20}>
        Long Name
      </Text>
      <Flex type="start" gap={8} mt={12} alignItems="center">
        <Icon src={ICSuitase} height={20} width={20} />
        <Text size="md" weight="normal">
          Jabatan
        </Text>
      </Flex>
      <Text numberOfLines={1} size="md" weight="normal" alignItems="center" mt={4}>
        PT Technova Optima Prima
      </Text>
      <Text size="md" numberOfLines={3} mt={20}>
        It is a long established fact that a reader will be distracted by the readable content of a
        page when looking at its layout. The point of using Lorem Ipsum is that it has a
        more-or-less normal distribution of letters, as opposed to using 'Content here, content
        here', making it look like readable English. Many desktop publishing packages and web page
        editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will
        uncover many web sites still in their infancy. Various versions have evolved over the years,
        sometimes by accident, sometimes on purpose (injected humour and the like).
      </Text>
      <Flex type="start" gap={8} style={{ marginTop: 36 }}>
        <Icon
          onPres={() => console.log('ICInstagram')}
          src={ICInstagram}
          height={32}
          width={32}
          style={{ borderRadius: 8 }}
        />
        <Icon
          onPres={() => console.log('ICLinkedIn')}
          src={ICLinkedIn}
          height={32}
          width={32}
          style={{ borderRadius: 8 }}
        />
        <Icon onPres={onSignOut} src={ICX} height={32} width={32} style={{ borderRadius: 8 }} />
      </Flex>
      <MyCardProfileCurve isBottom />
    </Card>
  );
};

export default Profile;
