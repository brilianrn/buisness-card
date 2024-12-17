import { Control, UseFormWatch } from 'react-hook-form';
import {
  ImageSourcePropType,
  ImageStyle,
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
} from 'react-native';

export interface InputTextProps {
  control?: Control<any>;
  watch?: UseFormWatch<any>;
  name?: string;
  value?: string;
  setValue?: (value: string) => void;
  style?: StyleProp<TextStyle>;
  required?: boolean;
  placeholder?: string;
  label?: string;
  type: KeyboardTypeOptions | 'textarea';
  errorMessage?: string;
  secureTextEntry?: boolean;
  useInsideLabel?: boolean;
  onFocused?: (isFocus: boolean) => void;
  readonly?: boolean;
  disabled?: boolean;
  editInModal?: boolean;
  onSubmit?: (value: string) => Promise<unknown>;
  icon?: ImageSourcePropType | string;
  iconPosition?: 'right' | 'left';
  iconOnClick?: () => void;
  iconStyle?: StyleProp<ImageStyle>;
  iconType?: 'text' | 'image' | 'icon';
  iconColor?: string;
  iconSize?: number;
  icon2nd?: ImageSourcePropType | string;
  iconPosition2nd?: 'right' | 'left';
  iconOnClick2nd?: () => void;
  iconStyle2nd?: StyleProp<ImageStyle>;
  iconType2nd?: 'text' | 'image' | 'icon';
  iconColor2nd?: string;
  iconSize2nd?: number;
  isLoading?: boolean;
}
