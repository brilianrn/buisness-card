import { FC, ReactNode, useMemo } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { Animation } from 'react-native-animatable';
import { Modal, ScrollDiv, ScrollDivProps } from 'react-native-magnus';
import { ICClose } from '../../assets/icons/main';
import Button from '../button';
import Div from '../div';
import Flex from '../flex';
import Icon from '../icon';
import Text from '../text';

interface ModalCompProps extends Partial<ScrollDivProps> {
  title?: string;
  useHeader?: boolean;
  size: 'sm' | 'md' | 'lg' | 'xl' | 'auto';
  isVisible: boolean;
  setIsVisible: (value: boolean) => void;
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  animationIn?: Animation;
  confirm?: string;
  onConfirm?: () => void;
  confirmDisable?: boolean;
  confirmLoading?: boolean;
  cancel?: string;
  cancelDisable?: boolean;
  onCancel?: (open?: false) => void;
}

const ModalComp: FC<ModalCompProps> = ({
  title,
  useHeader,
  children,
  style,
  setIsVisible,
  size,
  animationIn = 'fadeInUp',
  isVisible,
  cancel = 'Cancel',
  confirm = 'Submit',
  onCancel,
  onConfirm,
  cancelDisable,
  confirmDisable,
  confirmLoading,
  ...props
}) => {
  const mapSize = useMemo(() => {
    switch (size) {
      case 'sm':
        return '30%';
      case 'md':
        return '50%';
      case 'lg':
        return '70%';
      case 'xl':
        return '100%';
    }
  }, [size]);

  return (
    <Modal
      isVisible={isVisible}
      onBackdropPress={!confirmLoading ? () => setIsVisible(false) : undefined}
      onBackButtonPress={!confirmLoading ? () => setIsVisible(false) : undefined}
      onDismiss={!confirmLoading ? () => setIsVisible(false) : undefined}
      h={mapSize}
      roundedTop={12}
      animationIn={animationIn}
      style={[style, { position: 'relative' }]}>
      <Div position="relative" h="100%">
        {useHeader && (
          <Div position="relative" p={16} pt={title ? 16 : 22} w="100%" bg="white" roundedTop={12}>
            <Text
              size="lg"
              justifyContent="center"
              alignSelf="center"
              alignItems="center"
              w="100%"
              color="dark"
              weight="medium"
              px={24}>
              {title}
            </Text>
            <Icon
              src={ICClose}
              height={16}
              width={16}
              alignSelf="flex-end"
              position="absolute"
              top={-20}
              onPres={!confirmLoading ? () => setIsVisible(false) : undefined}
            />
          </Div>
        )}
        <ScrollDiv {...props} h="100%">
          {children}
        </ScrollDiv>
        {(onConfirm || onCancel) && (
          <Flex type="between" gap={8} position="relative" bg="white" w="100%" bottom={0} p={16}>
            {onConfirm && (
              <Flex.Between>
                <Button
                  size="sm"
                  label={confirm}
                  type="primary"
                  isDisable={confirmDisable}
                  isLoading={confirmLoading}
                  onPress={onConfirm}
                />
              </Flex.Between>
            )}
            {onCancel && (
              <Flex.Between>
                <Button
                  size="sm"
                  label={cancel}
                  type="danger"
                  isDisable={cancelDisable || confirmLoading}
                  onPress={() => onCancel && onCancel(false)}
                />
              </Flex.Between>
            )}
          </Flex>
        )}
      </Div>
    </Modal>
  );
};

export default ModalComp;
