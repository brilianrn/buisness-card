export type TColor =
  | 'lighter'
  | 'default'
  | 'darker'
  | '50'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | '950';

export type TSize = 'sm' | 'md' | 'lg' | 'xl';

export type TFontWeight = 'normal' | 'medium' | 'bold';

export type TColorType = 'primary' | 'danger' | 'warning' | 'secondary' | 'dark' | 'blue';

export type TPosition = 'center' | 'right' | 'left';

export interface IColorComponent {
  tone?: TColor;
  color?: TColorType;
  hex?: string;
  onPress?: () => void;
}
