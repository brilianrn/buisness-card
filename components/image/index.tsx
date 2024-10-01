import { Image as RNImage } from 'react-native';
import { Div } from 'react-native-magnus';
import { ImageProps } from '../../shared/types/components/image.type';
import ImageAvatar from './avatar';

const Image = ({ src, style, height, width, containerStyle, ...props }: ImageProps) => {
  return (
    <Div {...props} style={[containerStyle]}>
      <RNImage source={src} style={[{ height, width }, style]} />
    </Div>
  );
};

Image.Avatar = ImageAvatar;

export default Image;
