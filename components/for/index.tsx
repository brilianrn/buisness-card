import { FC, ReactNode } from 'react';
import { Div, DivProps } from 'react-native-magnus';

const For: FC<{ count: number; children: ReactNode; gap?: number } & DivProps> = ({
  children,
  count,
  gap = 12,
  style,
  ...props
}) => {
  return (
    <Div {...props} style={Object.assign(style || {}, { gap })}>
      {Array.from(Array(count).keys()).map((e) => (
        <Div key={e}>{children}</Div>
      ))}
    </Div>
  );
};

export default For;
