import { Image } from 'react-native';
import { Tabs } from 'react-native-auto-route';
import { ReactNative } from '../../assets/icons/main';
import { appRoute } from '../../constants/routes';

const AppLayout = () => {
  return (
    <Tabs initialRouteName={appRoute['my-card']} screenOptions={{ headerShown: false }}>
      <Tabs.Screen
        name={appRoute['my-card']}
        options={{
          tabBarIcon: ({ size }) => (
            <Image source={ReactNative} style={{ height: size, width: size }} />
          ),
        }}
      />
      <Tabs.Screen
        name={appRoute.connection}
        options={{
          tabBarIcon: ({ size }) => (
            <Image source={ReactNative} style={{ height: size, width: size }} />
          ),
        }}
      />
      <Tabs.Screen
        name={appRoute.scan}
        options={{
          tabBarIcon: ({ size }) => (
            <Image source={ReactNative} style={{ height: size, width: size }} />
          ),
        }}
      />
      <Tabs.Screen
        name={appRoute.analytics}
        options={{
          tabBarIcon: ({ size }) => (
            <Image source={ReactNative} style={{ height: size, width: size }} />
          ),
        }}
      />
      <Tabs.Screen
        name={appRoute.setting}
        options={{
          tabBarIcon: ({ size }) => (
            <Image source={ReactNative} style={{ height: size, width: size }} />
          ),
        }}
      />
    </Tabs>
  );
};

export default AppLayout;
