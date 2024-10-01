import { StyleSheet } from 'react-native';
import { cDanger, cPrimary, cSecondary, cWarning } from '../colors';

export const buttonContainerStyle = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 8,
    padding: 16,
    alignSelf: 'center',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 8,
  },
  primary: {
    backgroundColor: cPrimary.default,
  },
  danger: {
    backgroundColor: cDanger.default,
  },
  warning: {
    backgroundColor: cWarning.default,
  },
  secondary: {
    backgroundColor: cSecondary.default,
  },
  transparent: {},
});

export const buttonTextStyle = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
  primary: {},
  danger: {},
  warning: {},
  secondary: {},
  transparent: {},
});
