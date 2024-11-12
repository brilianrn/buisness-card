import { fontFamily, typeColor } from '../../constants/fonts';
import { TColor, TColorType, TFontWeight, TSize } from '../types/app.type';

export const fontMontserrat = (weight: TFontWeight) => fontFamily.MONTSERRAT[weight];

export const fontSize = (size?: TSize | number): number =>
  size === 'sm' ? 12 : size === 'md' ? 14 : size === 'lg' ? 16 : size === 'xl' ? 18 : Number(size);

export const colors = (color: TColorType | string, tone?: TColor): string => {
  const arrColor: Array<TColorType | string> = [
    'danger',
    'dark',
    'primary',
    'secondary',
    'warning',
  ];
  return arrColor?.includes(color) ? typeColor[color as TColorType][tone || 'default'] : color;
};
