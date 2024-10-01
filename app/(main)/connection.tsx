import { NativeStackNavigationOptions } from 'react-native-screens/lib/typescript/native-stack/types';
import Layout from '../../components/layout';
import { ConnectionListView } from '../../packages';

const Connection = () => {
  return (
    <Layout overflowY={false}>
      <ConnectionListView />
    </Layout>
  );
};

export default Connection;

export const screenOptions = (): NativeStackNavigationOptions => ({
  title: 'Connection',
});
