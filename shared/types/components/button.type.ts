import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { ButtonProps as MButtonProps } from 'react-native-magnus';

export type TColorComponent =
  | 'primary'
  | 'danger'
  | 'warning'
  | 'secondary'
  | 'transparent'
  | 'outline-primary';

export interface ButtonProps extends MButtonProps {
  label: string;
  onPress?: () => void;
  isDisable?: boolean;
  isLoading?: boolean;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  type: TColorComponent;
}
