import { ImageSourcePropType, StyleProp, TextStyle, ViewStyle } from 'react-native';
import { ButtonProps as MButtonProps } from 'react-native-magnus';
import { TSize } from '../app.type';

export type TColorComponent =
  | 'primary'
  | 'danger'
  | 'warning'
  | 'secondary'
  | 'transparent'
  | 'outline-primary'
  | 'outline-danger';

export interface ButtonProps extends MButtonProps {
  label: string;
  onPress?: () => void;
  isDisable?: boolean;
  isLoading?: boolean;
  textStyle?: StyleProp<TextStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  type: TColorComponent;
  size?: TSize;
  icon?: string | ImageSourcePropType;
  iconSize?: number;
  iconColor?: string;
  iconHeight?: number;
  iconWidth?: number;
  iconPosition?: 'left' | 'right';
}
