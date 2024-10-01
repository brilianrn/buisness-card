import { FC } from 'react';
import { Avatar, Div } from 'react-native-magnus';
import { ImageAvatarProps } from '../../shared/types/components/image.type';

const ImageAvatar: FC<ImageAvatarProps> = ({
  labelPosition = 'bottom',
  height,
  src,
  width,
  style,
  containerStyle,
  containerBg,
  containerShadow,
  containerShadowColor,
  children,
  ...props
}) => {
  return (
    <Div
      {...props}
      style={[containerStyle]}
      bg={containerBg}
      shadow={containerShadow}
      shadowColor={containerShadowColor}
      flexDir={
        labelPosition === 'top'
          ? 'column-reverse'
          : labelPosition === 'right'
          ? 'row'
          : labelPosition === 'left'
          ? 'row-reverse'
          : 'column'
      }
      alignItems="center">
      <Avatar
        {...props}
        source={typeof src === 'string' ? undefined : src}
        style={[{ height, width }, style]}>
        {typeof src === 'string' ? src : undefined}
      </Avatar>
      {children}
    </Div>
  );
};

export default ImageAvatar;
