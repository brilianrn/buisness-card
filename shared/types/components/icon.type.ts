import { ImageSourcePropType, ImageStyle, StyleProp, ViewStyle } from 'react-native';

export interface IconProps {
  onPres?: () => void;
  src: ImageSourcePropType;
  height: number;
  width: number;
  style?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}
