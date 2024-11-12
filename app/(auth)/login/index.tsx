import { useWindowDimensions } from 'react-native';
import { Icon } from '../../../assets/images';
import { Div, Image, Text } from '../../../components';
import Layout from '../../../components/layout';
import { LoginView } from '../../../packages';
import { useColor } from '../../../shared/hooks';

const Login = () => {
  const { height } = useWindowDimensions();
  const { color } = useColor('primary');
  return (
    <Layout style={{ position: 'relative' }} overflowY={false}>
      <Div h={height / 2} w="100%" position="absolute" bg={color.default} />
      <Div px={16} top={height / 6}>
        <Div flexDir="row" alignItems="center" gap={4} mb={16}>
          <Image src={Icon} height={64} width={64} />
          <Div>
            <Text weight="bold" hex="white" size={24}>
              DBC
            </Text>
            <Text weight="bold" hex="white" size="md">
              Smart Buisness Card
            </Text>
          </Div>
        </Div>
        <Div bg="white" px={20} py={32} rounded="xl" shadow="sm">
          <LoginView />
        </Div>
      </Div>
    </Layout>
  );
};

export default Login;
