import { FC, ReactNode } from 'react';
import { StyleProp, TouchableOpacity, ViewStyle } from 'react-native';
import { TextProps } from '../../shared/types/components/text.type';
import Text from '../text';

interface LinkProps extends TextProps {
  containerStyle?: StyleProp<ViewStyle>;
  children: ReactNode;
}

const Link: FC<LinkProps> = ({ children, color = 'blue', tone = 'default', ...props }) => {
  return (
    <TouchableOpacity>
      <Text {...props} color={color} tone={tone}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Link;
