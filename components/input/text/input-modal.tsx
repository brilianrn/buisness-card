import { useMemo } from 'react';
import { UseFormWatch } from 'react-hook-form';
import {
  ActivityIndicator,
  Image,
  StyleProp,
  TextStyle as TextStyleRN,
  TouchableOpacity,
  View,
} from 'react-native';
import { cDark, cPrimary } from '../../../shared/styles/colors';
import { inputTextStyle as sxInput } from '../../../shared/styles/components/input.style';
import { InputTextProps } from '../../../shared/types/components/input.type';
import Div from '../../div';
import Icon from '../../icon';
import Text from '../../text';

interface InputWithModalProps extends Partial<InputTextProps> {
  watch: UseFormWatch<any>;
  name: string;
  onPres: (name: string) => void;
}

const InputWithModal = ({
  name,
  watch,
  onPres,
  errorMessage,
  icon,
  iconPosition,
  label,
  iconColor,
  iconOnClick,
  iconSize,
  iconStyle,
  iconType,
  iconOnClick2nd,
  icon2nd,
  iconColor2nd,
  iconPosition2nd,
  iconSize2nd,
  iconStyle2nd,
  iconType2nd,
  isLoading,
}: InputWithModalProps) => {
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

  return (
    <TouchableOpacity
      disabled={isLoading}
      onPress={() => onPres(name)}
      style={{ position: 'relative', width: '100%' }}>
      <View
        style={[
          styleInput,

          {
            position: 'relative',
            paddingVertical: !watch(name) ? 4 : 0,
            backgroundColor: isLoading ? cDark[100] : 'white',
          },
        ]}>
        <View
          style={{
            position: 'absolute',
            height: !watch(name) ? '100%' : '55%',
            top: watch(name) ? 8 : 4,
            width: '100%',
            display: 'flex',
            justifyContent: watch(name) ? 'flex-start' : 'center',
          }}>
          <Text
            size={watch(name) ? 10 : 'md'}
            color="dark"
            tone={watch(name) ? '400' : '600'}
            ml={iconPosition === 'left' ? 40 : 0}
            px={14}
            zIndex={1}>
            {label}
          </Text>
        </View>
        <Text
          numberOfLines={1}
          size="md"
          style={[
            sxInput.textInput,
            {
              paddingTop: watch(name) ? 24 : 14,
              paddingBottom: watch(name) ? 10 : 14,
            },
          ]}>
          {watch(name)}
        </Text>
        {isLoading && (
          <ActivityIndicator
            size="small"
            color={cPrimary.default}
            style={[
              sxInput.inputIconRight,
              { backgroundColor: cDark[100], borderRadius: 16, zIndex: 2 },
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
              {
                backgroundColor: 'transparent',
                height: icon && !watch(name) ? '120%' : '100%',
              },
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
              {
                backgroundColor: 'transparent',
                height: icon2nd && !watch(name) ? '120%' : '100%',
              },
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
    </TouchableOpacity>
  );
};

export default InputWithModal;
