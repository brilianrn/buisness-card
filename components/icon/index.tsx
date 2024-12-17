import { FC } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { DivProps } from 'react-native-magnus';
import ICFA from 'react-native-vector-icons/FontAwesome';
import { IconFAProps, IconProps } from '../../shared/types/components/icon.type';
import Div from '../div';

const Icon = ({
  height,
  src,
  width,
  onPres,
  style,
  containerStyle,
  ...props
}: IconProps & DivProps) => {
  return (
    <TouchableOpacity activeOpacity={onPres ? 0.3 : 1} style={containerStyle} onPress={onPres}>
      <Div {...props}>
        <Image source={src} style={[{ height, width }, style]} />
      </Div>
    </TouchableOpacity>
  );
};

const IconFA: FC<IconFAProps> = ({ size = 24, name, ...props }) => (
  <ICFA {...props} name={name?.toString()} size={size} />
);

Icon.FA = IconFA;

export default Icon;
