import { SafeAreaView, Text } from 'react-native';
import { NativeStackNavigationOptions } from 'react-native-screens/lib/typescript/native-stack/types';

const Scan = () => {
  return (
    <SafeAreaView>
      <Text>Scan</Text>
    </SafeAreaView>
  );
};

export default Scan;

export const screenOptions = (): NativeStackNavigationOptions => ({
  title: 'Scan',
});
