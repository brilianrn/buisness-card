import { FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { useColor } from '../../shared/hooks';
import Div from '../div';

const MyCardProfileCurve: FC<{ isBottom?: boolean }> = ({ isBottom }) => {
  const { color } = useColor('primary');
  return (
    <Div
      position="absolute"
      zIndex={-1}
      top={isBottom ? undefined : 0}
      left={isBottom ? undefined : 0}
      bottom={isBottom ? 0 : undefined}
      right={isBottom ? 0 : undefined}
      w="100%"
      h="100%">
      {isBottom ? (
        <Svg height="318" width="310" viewBox="0 0 239 227">
          <Path
            opacity={0.07}
            d="M292.338 24C232.812 48.9466 77.7948 125.544 132.994 224.964C188.193 324.385 8 384.319 5 402.783"
            stroke={color.default}
            strokeWidth="50"
          />
        </Svg>
      ) : (
        <Svg height="300" width="300">
          <Path
            d="M -20 100 C 20 20, 180 200, 200 -20"
            fill="transparent"
            stroke={color.default}
            opacity={0.07}
            strokeWidth="50"
          />
        </Svg>
      )}
    </Div>
  );
};

export default MyCardProfileCurve;
