import { ImageSourcePropType, ImageStyle, StyleProp, ViewStyle } from 'react-native';
import { AvatarProps, DivProps } from 'react-native-magnus';

export interface IContainer {
  containerStyle?: StyleProp<ViewStyle>;
  containerBg?: string;
  containerShadow?: string | number;
  containerShadowColor?: string;
}

export interface ImageProps extends DivProps {
  src: ImageSourcePropType;
  style?: StyleProp<ImageStyle>;
  height: number;
  width: number;
  containerStyle?: StyleProp<ViewStyle>;
}

export interface ImageAvatarProps extends AvatarProps, DivProps, IContainer {
  labelPosition?: 'right' | 'left' | 'bottom' | 'top';
  src?: ImageSourcePropType | string;
  style?: StyleProp<ImageStyle>;
  height: number;
  width: number;
  containerStyle?: StyleProp<ViewStyle>;
  containerBg?: string;
}
