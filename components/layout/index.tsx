import { FC, ReactNode } from 'react';
import { ScrollView, StyleProp, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface LayoutProps {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  overflowY?: boolean;
}

const Layout: FC<LayoutProps> = ({ children, style, overflowY = true }) => {
  return (
    <SafeAreaView style={{ paddingBottom: 0, backgroundColor: 'white' }} edges={['top']}>
      <ScrollView
        style={[{ backgroundColor: 'white', height: '100%' }, style]}
        scrollEnabled={overflowY}
        nestedScrollEnabled={true}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Layout;
