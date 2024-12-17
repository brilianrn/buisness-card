import React, { FC, useEffect, useMemo, useState } from 'react';
import { Controller } from 'react-hook-form';
import {
  ActivityIndicator,
  Image,
  LayoutAnimation,
  NativeModules,
  StyleProp,
  TextInput,
  TextStyle as TextStyleRN,
  TouchableOpacity,
  View,
} from 'react-native';
import { cPrimary } from '../../../shared/styles/colors';
import { inputTextStyle as sxInput } from '../../../shared/styles/components/input.style';
import { InputTextProps } from '../../../shared/types/components/input.type';
import Div from '../../div';
import Icon from '../../icon';
import Text from '../../text';
import InputWithModal from './input-modal';
import ModalText from './modal-text';

const { UIManager } = NativeModules;

UIManager.setLayoutAnimationEnabledExperimental &&
  UIManager.setLayoutAnimationEnabledExperimental(true);

const InputText: FC<InputTextProps> = (props) => {
  const {
    name = 'input',
    control,
    required = true,
    setValue,
    value,
    icon,
    iconOnClick,
    iconPosition,
    iconStyle,
    style = null,
    label,
    type = 'default',
    iconType = 'image',
    placeholder,
    errorMessage,
    secureTextEntry = false,
    useInsideLabel = false,
    onFocused: onChangeFocused,
    readonly,
    editInModal = false,
    watch,
    onSubmit,
    iconColor,
    iconSize,
    iconOnClick2nd,
    icon2nd,
    iconColor2nd,
    iconPosition2nd,
    iconSize2nd,
    iconStyle2nd,
    iconType2nd,
    isLoading = false,
  } = props;

  const [focused, setFocused] = useState<boolean>(false);
  const [showModal, setShowModal] = useState<boolean>(false);

  const styleInput: StyleProp<TextStyleRN> = useMemo(() => {
    if (icon && icon2nd && errorMessage) {
      return [sxInput.inputError, sxInput.inputWithIconBoth];
    } else if (icon && icon2nd) {
      return [sxInput.input, sxInput.inputWithIconBoth];
    } else if (errorMessage && icon && iconPosition === 'right') {
      return [sxInput.inputError, sxInput.inputWithIconRight];
    } else if (errorMessage && icon && iconPosition === 'left') {
      return [sxInput.inputError, sxInput.inputWithIconLeft];
    } else if (icon && iconPosition === 'right') {
      return [sxInput.input, sxInput.inputWithIconRight];
    } else if (icon && iconPosition === 'left') {
      return [sxInput.input, sxInput.inputWithIconLeft];
    } else if (errorMessage) {
      return [sxInput.inputError];
    } else {
      return [sxInput.input];
    }
  }, [errorMessage, iconPosition, icon, icon2nd]);

  const onFocused = (isFocus: boolean) => {
    LayoutAnimation.spring();
    setFocused(isFocus);
    onChangeFocused && onChangeFocused(isFocus);
  };

  useEffect(() => {
    if (control?._getWatch(name)) {
      onFocused(true);
    }
  }, [control]);

  const onSubmitForm = async () => {
    onSubmit && (await onSubmit(watch && watch(name)));
    setShowModal(false);
  };

  return editInModal && watch ? (
    <>
      <ModalText
        {...props}
        required={required}
        isShow={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={onSubmitForm}
        title={props?.label || ''}>
        <InputText {...props} editInModal={false} name={name} />
      </ModalText>
      {!showModal && (
        <InputWithModal {...props} onPres={() => setShowModal(true)} name={name} watch={watch} />
      )}
    </>
  ) : (
    <React.Fragment>
      <Div style={style} position="relative">
        {label && !useInsideLabel && (
          <Text size="md" style={{ marginBottom: 4 }}>
            {label}
          </Text>
        )}
        <View style={[...styleInput, { position: 'relative' }]}>
          {label && useInsideLabel && (
            <TouchableOpacity
              onPress={() => onFocused(true)}
              style={{
                position: 'absolute',
                height: type !== 'textarea' ? (!focused ? '100%' : '55%') : '100%',
                top: focused && type === 'textarea' ? 8 : 0,
                width: '100%',
                display: 'flex',
                justifyContent: focused && type === 'textarea' ? 'flex-start' : 'center',
              }}>
              <Text
                size={focused ? 10 : 'md'}
                color="dark"
                tone={focused ? '400' : '600'}
                ml={iconPosition === 'left' ? 40 : 0}
                px={14}
                zIndex={1}>
                {label}
              </Text>
            </TouchableOpacity>
          )}
          {control && name ? (
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value: valueForm } }) => (
                <TextInput
                  editable={!readonly && !isLoading}
                  multiline={type === 'textarea'}
                  numberOfLines={4}
                  style={[
                    sxInput.textInput,
                    {
                      paddingTop: useInsideLabel ? 24 : 14,
                      paddingBottom: useInsideLabel ? 10 : 14,
                    },
                  ]}
                  onBlur={() => {
                    onBlur();
                    if (!control?._getWatch(name)) onFocused(false);
                  }}
                  onChangeText={(payload) => {
                    onChange(payload);
                  }}
                  value={valueForm}
                  onFocus={() => onFocused(true)}
                  keyboardType={type === 'textarea' ? 'default' : type}
                  placeholder={(!useInsideLabel && placeholder) || undefined}
                  secureTextEntry={secureTextEntry}
                  autoCapitalize="none"
                />
              )}
              name={name}
              rules={{ required }}
            />
          ) : (
            <TextInput
              editable={!readonly && !isLoading}
              style={[
                sxInput.textInput,
                {
                  paddingTop: useInsideLabel ? 24 : 14,
                  paddingBottom: useInsideLabel ? 10 : 14,
                },
              ]}
              onBlur={() => {
                if (!control?._getWatch(name)) onFocused(false);
              }}
              onChangeText={setValue}
              value={value}
              onFocus={() => onFocused(true)}
              keyboardType={type === 'textarea' ? 'default' : type}
              placeholder={(!useInsideLabel && placeholder) || undefined}
              secureTextEntry={secureTextEntry}
              autoCapitalize="none"
            />
          )}
          {isLoading && (
            <ActivityIndicator
              size="small"
              color={cPrimary.default}
              style={[
                sxInput.inputIconRight,
                { backgroundColor: 'white', borderRadius: 16, zIndex: 2 },
              ]}
            />
          )}
          {/* ----------------------- 1st icon ----------------------- */}
          {icon && iconPosition && iconType === 'image' && typeof icon !== 'string' && (
            <TouchableOpacity
              style={[
                iconStyle,
                iconPosition === 'right' ? sxInput.inputIconRight : sxInput.inputIconLeft,
                { backgroundColor: 'transparent' },
              ]}
              activeOpacity={iconOnClick ? 0.7 : 1}
              onPress={iconOnClick}>
              <Image alt={`input ${name}`} source={icon} />
            </TouchableOpacity>
          )}
          {icon && iconPosition && iconType === 'text' && typeof icon === 'string' && (
            <Text
              size="md"
              style={[
                iconStyle,
                iconPosition === 'right' ? sxInput.inputIconRight : sxInput.inputIconLeft,
                { backgroundColor: 'transparent' },
              ]}>
              {icon}
            </Text>
          )}
          {icon && iconPosition && iconType === 'icon' && typeof icon === 'string' && (
            <TouchableOpacity
              style={[
                iconStyle,
                iconPosition === 'right' ? sxInput.inputIconRight : sxInput.inputIconLeft,
                { backgroundColor: 'transparent' },
              ]}
              activeOpacity={iconOnClick ? 0.7 : 1}
              onPress={iconOnClick}>
              <Div style={iconStyle}>
                <Icon.FA name={icon} color={iconColor} size={iconSize} />
              </Div>
            </TouchableOpacity>
          )}
          {/* ----------------------- 1st icon ----------------------- */}

          {/* ----------------------- 2nd icon ----------------------- */}
          {icon2nd && iconPosition2nd && iconType2nd === 'image' && typeof icon2nd !== 'string' && (
            <TouchableOpacity
              style={[
                iconStyle2nd,
                iconPosition2nd === 'right' ? sxInput.inputIconRight : sxInput.inputIconLeft,
                { backgroundColor: 'transparent' },
              ]}
              activeOpacity={iconOnClick2nd ? 0.7 : 1}
              onPress={iconOnClick2nd}>
              <Image alt={`input ${name}`} source={icon2nd} />
            </TouchableOpacity>
          )}
          {icon2nd && iconPosition2nd && iconType2nd === 'text' && typeof icon2nd === 'string' && (
            <Text
              size="md"
              style={[
                iconStyle2nd,
                iconPosition2nd === 'right' ? sxInput.inputIconRight : sxInput.inputIconLeft,
                { backgroundColor: 'transparent' },
              ]}>
              {icon2nd}
            </Text>
          )}
          {icon2nd && iconPosition2nd && iconType2nd === 'icon' && typeof icon2nd === 'string' && (
            <TouchableOpacity
              style={[
                iconStyle2nd,
                iconPosition2nd === 'right' ? sxInput.inputIconRight : sxInput.inputIconLeft,
                { backgroundColor: 'transparent' },
              ]}
              activeOpacity={iconOnClick2nd ? 0.7 : 1}
              onPress={iconOnClick2nd}>
              <Div style={iconStyle2nd}>
                <Icon.FA name={icon2nd} color={iconColor2nd} size={iconSize2nd} />
              </Div>
            </TouchableOpacity>
          )}
          {/* ----------------------- 2nd icon ----------------------- */}
        </View>
        {errorMessage && (
          <View style={sxInput.formErrorMessage}>
            <Text size="sm" style={sxInput.textErrorMessage} color="danger" tone="500">
              {errorMessage}
            </Text>
          </View>
        )}
      </Div>
    </React.Fragment>
  );
};

export default InputText;
