import { FC } from 'react';
import { View } from 'react-native';
import { styles } from '../../shared/styles/app.style';
import { FlexBetweenProps, FlexProps } from '../../shared/types/components/flex.type';
import Div from '../div';

const Flex = ({ children, style, type = 'between', gap = 4, ...props }: FlexProps) => {
  return (
    <Div {...props}>
      <View style={[styles[type], { gap }, style]}>{children}</View>
    </Div>
  );
};

const Between: FC<FlexBetweenProps> = ({ children, style }) => {
  return <View style={[{ flexBasis: '100%', flexGrow: 1, flexShrink: 1 }, style]}>{children}</View>;
};

Flex.Between = Between;

export default Flex;
