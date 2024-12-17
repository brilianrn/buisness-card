import { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { cPrimary } from '../../shared/styles/colors';
import Button from '../button';
import Div from '../div';
import Icon from '../icon';
import Text from '../text';

interface EmptyStateProps {
  message?: string;
  actionButton?: string;
  onAction?: () => void;
  actionButtonStyle?: StyleProp<ViewStyle>;
  actionWidth?: string;
}

const EmptyState: FC<EmptyStateProps> = ({
  actionButton,
  actionButtonStyle,
  message = 'Data not found',
  onAction,
  actionWidth,
}) => {
  return (
    <Div alignItems="center" justifyContent="center" gap={8}>
      <Icon.FA name="folder-open-o" size={28} color={cPrimary.default} />
      <Text size="md">{message}</Text>
      {actionButton && onAction && (
        <Button
          style={actionButtonStyle}
          label={actionButton}
          type="primary"
          size="sm"
          w={actionWidth}
          alignSelf="center"
          onPress={onAction}
        />
      )}
    </Div>
  );
};

export default EmptyState;
