import { ScrollView } from 'react-native';
import { useRouter } from 'react-native-auto-route';
import { Div } from 'react-native-magnus';
import { ReactNative } from '../../../../assets/icons/main';
import { Flex, For, Image, Text } from '../../../../components';
import { appRoute } from '../../../../constants/routes';
import { cDark } from '../../../../shared/styles/colors';

const Satu = () => {
  const { navigate } = useRouter();
  return (
    <ScrollView scrollEnabled={true}>
      <For count={20} mt={12} gap={12} mb={280} px={16}>
        <Flex
          onPress={() => navigate(appRoute.connectionDetail('ID'))}
          bg={cDark[200]}
          rounded="md"
          p={12}>
          <Flex.Between>
            <Image.Avatar
              color="white"
              alignItems="center"
              height={32}
              width={32}
              src="RN"
              bg={cDark[500]}
              labelPosition="right">
              <Div ml={12}>
                <Text size="md" weight="bold">
                  Email
                </Text>
                <Text size="md" weight="normal">
                  Jabatan
                </Text>
              </Div>
            </Image.Avatar>
          </Flex.Between>
          <Flex.Between>
            <Flex type="end" gap={8}>
              <Image
                src={ReactNative}
                height={24}
                width={24}
                style={{ backgroundColor: cDark.darker, borderRadius: 8 }}
              />
              <Image
                src={ReactNative}
                height={24}
                width={24}
                style={{ backgroundColor: cDark.darker, borderRadius: 8 }}
              />
            </Flex>
          </Flex.Between>
        </Flex>
      </For>
    </ScrollView>
  );
};

export default Satu;
