import { FC } from 'react';
import { Text as RNText } from 'react-native';
import { typeColor } from '../../constants/fonts';
import { TextProps } from '../../shared/types/components/text.type';
import { fontMontserrat, fontSize } from '../../utils/styles/fonts';
import Div from '../div';

const Text: FC<TextProps> = ({
  style,
  size = 'md',
  color = 'dark',
  tone = 'default',
  weight = 'normal',
  hex,
  children,
  onPress,
  numberOfLines,
  ...props
}) => {
  return (
    <Div {...props}>
      <RNText
        numberOfLines={numberOfLines}
        style={[
          style,
          {
            fontFamily: fontMontserrat(weight),
            fontSize: fontSize(size),
            color: hex || typeColor[color][tone],
          },
        ]}
        onPress={onPress}>
        {children}
      </RNText>
    </Div>
  );
};

export default Text;
