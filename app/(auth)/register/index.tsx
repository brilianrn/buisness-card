import { useWindowDimensions } from 'react-native';
import { Div, Text } from '../../../components';
import Layout from '../../../components/layout';
import { RegisterView } from '../../../packages';
import { useColor } from '../../../shared/hooks';

const Register = () => {
  const { height } = useWindowDimensions();
  const { color } = useColor('primary');
  return (
    <Layout style={{ position: 'relative' }} overflowY={false}>
      <Div h={height / 2} w="100%" position="absolute" bg={color.default} />
      <Div px={16} top={height / 10}>
        <Div bg="white" px={20} py={32} rounded="xl" shadow="sm">
          <Text weight="bold" size={20} alignItems="center" mb={16}>
            Register
          </Text>
          <RegisterView />
        </Div>
      </Div>
    </Layout>
  );
};

export default Register;
