import { FC, ReactNode, useEffect, useMemo, useState } from 'react';
import { LayoutAnimation, NativeModules } from 'react-native';
import { Div, Image, Modal, Text } from '../..';
import { ICQuestionCircle } from '../../../assets/icons/main';
import { InputTextProps } from '../../../shared/types/components/input.type';

interface ModalTextProps extends Partial<InputTextProps> {
  isShow: boolean;
  title: string;
  onClose: (open?: false) => void;
  children: ReactNode;
}

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const ModalText: FC<ModalTextProps> = ({
  title,
  isShow,
  onClose,
  children,
  required,
  watch,
  name,
  control,
  onSubmit,
  isLoading,
}) => {
  const [isUnsave, setIsUnsave] = useState<boolean>(false);

  useEffect(() => {
    if (isShow) setIsUnsave(false);
  }, [isShow]);

  useEffect(() => {
    if (isShow) LayoutAnimation.spring();
  }, [isUnsave, isShow]);

  const onCloseInput = () => {
    const isDirty = control?.getFieldState(name || '')?.isDirty;
    if (isDirty) {
      setIsUnsave(true);
    } else {
      onClose(false);
    }
  };

  const onUnsaved = () => {
    control?._reset();
    setIsUnsave(true);
    onClose(false);
  };

  const isDirty = useMemo(() => {
    if (control && name) {
      return control.getFieldState(name).isDirty;
    }
  }, [control, name, watch && name && watch(name)]);

  return (
    <Modal
      useHeader={!isUnsave}
      size={isUnsave ? 'sm' : 'md'}
      isVisible={isShow}
      title={!isUnsave ? `Change ${title}` : undefined}
      setIsVisible={onCloseInput}
      onCancel={isUnsave ? () => setIsUnsave(false) : onCloseInput}
      confirmLoading={isLoading}
      onConfirm={isUnsave ? onUnsaved : () => onSubmit && onSubmit(control?._getWatch(name))}
      cancel={isUnsave ? 'No' : 'Cancel'}
      confirm={isUnsave ? 'Yes' : 'Submit'}
      confirmDisable={!isDirty || (isUnsave ? false : required && watch && !watch(name || ''))}>
      <Div p={16}>
        {isUnsave ? (
          <Div h="100%" alignItems="center" justifyContent="center">
            <Image src={ICQuestionCircle} height={72} width={72} alignItems="center" />
            <Text size="md" weight="normal" alignItems="center" mt={8}>
              Do you want to remove this changes?
            </Text>
          </Div>
        ) : (
          children
        )}
      </Div>
    </Modal>
  );
};

export default ModalText;
