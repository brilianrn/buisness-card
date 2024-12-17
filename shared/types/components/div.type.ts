import { StyleProp, ViewStyle } from 'react-native';
import { DivProps as MDivProps } from 'react-native-magnus';
import { GestureResponderEvent } from 'react-native-modal';

export interface DivProps extends MDivProps {
  gap?: number;
  onPress?: (e: GestureResponderEvent) => void;
  containerStyle?: StyleProp<ViewStyle>;
}
