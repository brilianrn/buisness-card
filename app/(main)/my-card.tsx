import { NativeStackNavigationOptions } from 'react-native-screens/lib/typescript/native-stack/types';
import Layout from '../../components/layout';
import { MyCardView } from '../../packages';

const MyCard = () => {
  return (
    <Layout style={{ paddingHorizontal: 16 }}>
      <MyCardView />
    </Layout>
  );
};

export default MyCard;

export const screenOptions = (): NativeStackNavigationOptions => ({
  title: 'My Card',
});
