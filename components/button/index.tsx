import { ActivityIndicator } from 'react-native';
import { Button as MButton } from 'react-native-magnus';
import { useColor } from '../../shared/hooks';
import { cPrimary } from '../../shared/styles/colors';
import { buttonTextStyle as sx } from '../../shared/styles/components/button.style';
import { ButtonProps, TColorComponent } from '../../shared/types/components/button.type';
import Div from '../div';
import Icon from '../icon';
import Image from '../image';
import Text from '../text';
import Link from './link';

const Button = ({
  label,
  containerStyle,
  isDisable = false,
  isLoading = false,
  onPress,
  textStyle,
  type = 'outline-primary',
  w = '100%',
  rounded = 12,
  size = 'md',
  icon,
  iconColor,
  iconSize = 12,
  iconHeight = 12,
  iconPosition = 'left',
  iconWidth = 12,
  ...props
}: ButtonProps) => {
  const { color } = useColor(
    type.includes('outline') ? (type?.split('outline-')?.[1] as unknown as TColorComponent) : type
  );

  return (
    <MButton
      {...props}
      w={w}
      disabled={isDisable || isLoading}
      bg={type.includes('outline') ? 'transparent' : color.default}
      borderWidth={1}
      p={size === 'sm' ? 12 : size === 'md' ? 16 : size === 'lg' ? 20 : 24}
      borderColor={color.default}
      onPress={onPress}
      rounded={rounded}>
      <Div flexDir="row" justifyContent="center" alignItems="center" alignSelf="center" gap={8}>
        {isLoading ? (
          <ActivityIndicator
            size="small"
            color={type.includes('outline') ? color.default : 'white'}
            style={{ marginVertical: -1 }}
          />
        ) : iconPosition === 'left' && typeof icon === 'string' ? (
          <Icon.FA name={icon} size={iconSize} color={iconColor} />
        ) : iconPosition === 'left' && typeof icon === 'object' ? (
          <Image src={icon} height={iconHeight} width={iconWidth} />
        ) : null}
        <Text
          size={size}
          weight="bold"
          justifyContent="center"
          style={[textStyle, sx.text]}
          hex={
            type === 'transparent'
              ? cPrimary.default
              : type.includes('outline')
              ? color.default
              : 'white'
          }>
          {label}
        </Text>
        {!isLoading && iconPosition === 'right' && typeof icon === 'string' ? (
          <Icon.FA name={icon} size={iconSize} color={iconColor} />
        ) : !isLoading && iconPosition === 'right' && typeof icon === 'object' ? (
          <Image src={icon} height={iconHeight} width={iconWidth} />
        ) : null}
      </Div>
    </MButton>
  );
};

Button.Link = Link;

export default Button;
