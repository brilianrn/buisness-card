import { ReactNode } from 'react';
import { StyleProp, TextStyle } from 'react-native';
import { DivProps } from 'react-native-magnus';
import { IColorComponent, TFontWeight, TSize } from '../app.type';

export interface TextProps extends IColorComponent, DivProps {
  size: TSize | number;
  weight?: TFontWeight;
  children: ReactNode;
  style?: StyleProp<TextStyle>;
  numberOfLines?: number;
}
