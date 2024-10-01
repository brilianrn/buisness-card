import { FC, useMemo } from 'react';
import { Controller } from 'react-hook-form';
import {
  Image,
  StyleProp,
  TextInput,
  TextStyle as TextStyleRN,
  TouchableOpacity,
  View,
} from 'react-native';
import { inputTextStyle as sxInput } from '../../../shared/styles/components/input.style';
import { InputTextProps } from '../../../shared/types/components/input.type';
import Text from '../../text';

const InputText: FC<InputTextProps> = ({
  name,
  control,
  required,
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
}) => {
  const styleInput: StyleProp<TextStyleRN> = useMemo(() => {
    if (errorMessage && icon && iconPosition === 'right') {
      return [sxInput.inputError, sxInput.inputWithIconRight];
    } else if (errorMessage && icon && iconPosition === 'left') {
      return [sxInput.inputError, sxInput.inputWithIconLeft];
    } else if (icon && iconPosition === 'right') {
      return [sxInput.input, sxInput.inputWithIconRight];
    } else if (icon && iconPosition === 'left') {
      return [sxInput.input, sxInput.inputWithIconLeft];
    } else if (errorMessage) {
      return [sxInput.inputError, sxInput.inputWithoutIcon];
    } else {
      return [sxInput.input, sxInput.inputWithoutIcon];
    }
  }, [errorMessage, iconPosition]);
  return (
    <View style={style}>
      {label && (
        <Text size="md" style={{ marginBottom: 4 }}>
          {label}
        </Text>
      )}
      <View style={{ position: 'relative' }}>
        {control && name ? (
          <Controller
            control={control}
            render={({ field: { onChange, onBlur, value: valueForm } }) => (
              <TextInput
                style={styleInput}
                onBlur={onBlur}
                onChangeText={(payload) => onChange(payload)}
                value={valueForm}
                keyboardType={type}
                placeholder={placeholder}
                secureTextEntry={secureTextEntry}
                autoCapitalize="none"
              />
            )}
            name={name}
            rules={{ required }}
          />
        ) : (
          <TextInput
            style={styleInput}
            onChangeText={setValue}
            value={value}
            keyboardType={type}
            placeholder={placeholder}
            secureTextEntry={secureTextEntry}
            autoCapitalize="none"
          />
        )}
        {icon && iconPosition && iconType === 'image' && typeof icon !== 'string' && (
          <TouchableOpacity
            style={[
              iconStyle,
              iconPosition === 'right' ? sxInput.inputIconRight : sxInput.inputIconLeft,
            ]}
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
            ]}>
            {icon}
          </Text>
        )}
      </View>
      {errorMessage && (
        <View style={sxInput.formErrorMessage}>
          <Text size="sm" style={sxInput.textErrorMessage} color="danger" tone="500">
            {errorMessage}
          </Text>
        </View>
      )}
    </View>
  );
};

export default InputText;
