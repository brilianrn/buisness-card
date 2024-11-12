import { FC } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { DivProps } from 'react-native-magnus';
import { IconProps } from '../../shared/types/components/icon.type';
import Div from '../div';

const Icon: FC<IconProps & DivProps> = ({
  height,
  src,
  width,
  onPres,
  style,
  containerStyle,
  ...props
}) => {
  return (
    <TouchableOpacity activeOpacity={onPres ? 0.3 : 1} style={containerStyle} onPress={onPres}>
      <Div {...props}>
        <Image source={src} style={[{ height, width }, style]} />
      </Div>
    </TouchableOpacity>
  );
};

export default Icon;
