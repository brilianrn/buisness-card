import { SafeAreaView, Text } from 'react-native';
import { NativeStackNavigationOptions } from 'react-native-screens/lib/typescript/native-stack/types';

const Setting = () => {
  return (
    <SafeAreaView>
      <Text>Setting</Text>
    </SafeAreaView>
  );
};

export default Setting;

export const screenOptions = (): NativeStackNavigationOptions => ({
  title: 'Setting',
});
