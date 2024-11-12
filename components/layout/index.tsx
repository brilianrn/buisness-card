import { FC, ReactNode } from 'react';
import { ScrollView, StyleProp, ViewStyle } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useColor } from '../../shared/hooks';

interface LayoutProps {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
  overflowY?: boolean;
}

const Layout: FC<LayoutProps> = ({ children, style, overflowY = true }) => {
  const { color } = useColor('secondary');
  return (
    <SafeAreaView style={{ paddingBottom: 0, backgroundColor: color[50] }} edges={['top']}>
      <ScrollView
        style={[{ backgroundColor: color[50], height: '100%' }, style]}
        scrollEnabled={overflowY}
        nestedScrollEnabled={true}>
        {children}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Layout;
