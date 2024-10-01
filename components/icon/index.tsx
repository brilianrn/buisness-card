import { FC } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { IconProps } from '../../shared/types/components/icon.type';

const Icon: FC<IconProps> = ({ height, src, width, onPres, style, containerStyle }) => {
  return (
    <TouchableOpacity style={containerStyle} onPress={onPres}>
      <Image source={src} style={[{ height, width }, style]} />
    </TouchableOpacity>
  );
};

export default Icon;
