import { FC } from 'react';
import { DivProps } from '../../shared/types/components/div.type';
import Div from '../div';

interface CardProps extends DivProps {}

const Card: FC<CardProps> = ({ bg = 'white', rounded = 8, p = 'md', ...props }) => {
  return <Div {...props} bg={bg} p={p} rounded={rounded} />;
};

export default Card;
