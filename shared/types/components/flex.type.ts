import { ReactNode } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { DivProps } from 'react-native-magnus';
import { GestureResponderEvent } from 'react-native-modal';

export interface ComponentProps {
  style?: StyleProp<ViewStyle>;
  children: ReactNode;
}

export interface FlexProps extends DivProps {
  type?: 'between' | 'start' | 'center' | 'end';
  gap?: number;
  onPress?: (e: GestureResponderEvent) => void;
}

export interface FlexBetweenProps extends ComponentProps {}
