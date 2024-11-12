import { useWindowDimensions } from 'react-native';
import { Div, Text } from '../../../components';
import Layout from '../../../components/layout';
import { ForgotPasswordView } from '../../../packages';
import { useColor } from '../../../shared/hooks';

const ForgotPassword = () => {
  const { height } = useWindowDimensions();
  const { color } = useColor('primary');

  return (
    <Layout style={{ position: 'relative' }} overflowY={false}>
      <Div h={height / 2} w="100%" position="absolute" bg={color.default} />
      <Div px={16} top={height / 3}>
        <Div bg="white" px={20} py={32} rounded="xl" shadow="sm">
          <Text weight="bold" size={20} alignSelf="center" mb={16}>
            Forgot Password
          </Text>
          <ForgotPasswordView />
        </Div>
      </Div>
    </Layout>
  );
};

export default ForgotPassword;
