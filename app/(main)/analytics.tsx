import { SafeAreaView, Text } from 'react-native';
import { NativeStackNavigationOptions } from 'react-native-screens/lib/typescript/native-stack/types';

const Analytics = () => {
  return (
    <SafeAreaView>
      <Text>Analytics</Text>
    </SafeAreaView>
  );
};

export default Analytics;

export const screenOptions = (): NativeStackNavigationOptions => ({
  title: 'Analytics',
});
