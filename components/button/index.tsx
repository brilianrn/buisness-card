import { ActivityIndicator } from 'react-native';
import { Button as MButton } from 'react-native-magnus';
import { useColor } from '../../shared/hooks';
import { cPrimary } from '../../shared/styles/colors';
import { buttonTextStyle as sx } from '../../shared/styles/components/button.style';
import { ButtonProps } from '../../shared/types/components/button.type';
import Div from '../div';
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
  rounded = 8,
  ...props
}: ButtonProps) => {
  const { color } = useColor(type);
  return (
    <MButton
      {...props}
      w={w}
      disabled={isDisable || isLoading}
      bg={type.includes('outline') ? 'transparent' : color.default}
      borderWidth={type.includes('outline') ? 1 : 0}
      borderColor={cPrimary.default}
      onPress={onPress}
      rounded={rounded}>
      <Div flexDir="row" justifyContent="center" alignItems="center" alignSelf="center" gap={8}>
        {isLoading && (
          <ActivityIndicator
            size="small"
            color={type.includes('outline') ? color.default : 'white'}
            style={{ marginVertical: -1 }}
          />
        )}
        <Text
          size="md"
          weight="bold"
          justifyContent="center"
          style={[textStyle, sx.text]}
          hex={type === 'outline-primary' || type === 'transparent' ? cPrimary.default : 'white'}>
          {label}
        </Text>
      </Div>
    </MButton>
  );
};

Button.Link = Link;

export default Button;
