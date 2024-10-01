import { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Div as MDiv } from 'react-native-magnus';
import { DivProps } from '../../shared/types/components/div.type';

const Div: FC<DivProps> = ({ style, gap, flexDir = 'column', onPress, ...props }) => {
  return onPress ? (
    <TouchableOpacity onPress={onPress} disabled={!onPress}>
      <MDiv {...props} style={Object.assign(style || {}, { gap })} flexDir={flexDir} />
    </TouchableOpacity>
  ) : (
    <MDiv {...props} style={Object.assign(style || {}, { gap })} flexDir={flexDir} />
  );
};

export default Div;
