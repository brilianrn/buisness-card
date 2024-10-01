import { FC } from 'react';
import { Div, BadgeProps as MBadgeProps } from 'react-native-magnus';
import { useColor } from '../../shared/hooks';
import { TColorComponent } from '../../shared/types/components/button.type';

interface BadgeProps extends MBadgeProps {
  type: TColorComponent;
}

const Badge: FC<BadgeProps> = ({ type, p = 8, rounded = 'xl', bg, ...props }) => {
  const { color } = useColor(type);
  return <Div {...props} bg={bg || color.default} p={p} rounded={rounded} />;
};

export default Badge;
