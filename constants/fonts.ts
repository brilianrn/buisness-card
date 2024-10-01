import { cBlue, cDanger, cDark, cPrimary, cSecondary, cWarning } from '../shared/styles/colors';
import { TColor, TColorType } from '../shared/types/app.type';

export const fontFamily = {
  MONTSERRAT: {
    normal: 'Montserrat-Regular',
    medium: 'Montserrat-Medium',
    bold: 'Montserrat-Bold',
  },
};

export const typeColor: { [key in TColorType]: Record<TColor, string> } = {
  primary: cPrimary,
  danger: cDanger,
  warning: cWarning,
  secondary: cSecondary,
  dark: cDark,
  blue: cBlue,
};
