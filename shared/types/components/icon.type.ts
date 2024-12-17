import { ImageSourcePropType, ImageStyle, StyleProp, TextStyle, ViewStyle } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export interface IconProps {
  onPres?: () => void;
  src: ImageSourcePropType;
  height: number;
  width: number;
  style?: StyleProp<ImageStyle>;
  containerStyle?: StyleProp<ViewStyle>;
}

const glyphMap = FontAwesome.getRawGlyphMap();

export const FontAwesomeIcons = Object.keys(glyphMap) as (keyof typeof glyphMap)[];

export type FontAwesomeIcons = (typeof FontAwesomeIcons)[number];

export interface IconFAProps {
  name: FontAwesomeIcons;
  size?: number;
  color?: string;
  style?: ViewStyle | TextStyle;
}
