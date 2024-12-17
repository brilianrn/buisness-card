import { StyleSheet } from 'react-native';
import { cDanger, cDark } from '../colors';
import { fontMontserrat } from '../fonts';

export const inputTextStyle = StyleSheet.create({
  textInput: {
    fontFamily: fontMontserrat('normal'),
    fontSize: 14,
    paddingHorizontal: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: cDark[100],
    borderRadius: 12,
  },
  inputError: {
    borderWidth: 1,
    borderColor: cDanger[500],
    borderRadius: 12,
    letterSpacing: 0.3,
    fontFamily: fontMontserrat('normal'),
    backgroundColor: 'white',
  },
  inputWithIconRight: {
    paddingRight: 44,
    fontFamily: fontMontserrat('normal'),
    backgroundColor: 'white',
  },
  inputWithIconLeft: {
    paddingLeft: 40,
    fontFamily: fontMontserrat('normal'),
    backgroundColor: 'transparent',
  },
  inputIconRight: {
    position: 'absolute',
    top: 0,
    right: 0,
    height: '100%',
    width: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: fontMontserrat('normal'),
    backgroundColor: 'transparent',
  },
  inputIconLeft: {
    position: 'absolute',
    top: 0,
    left: 0,
    height: '100%',
    width: 56,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: fontMontserrat('normal'),
    backgroundColor: 'white',
  },
  inputWithIconBoth: {
    paddingRight: 44,
    fontFamily: fontMontserrat('normal'),
    backgroundColor: 'white',
    paddingLeft: 40,
  },
  formErrorMessage: {
    marginVertical: 4,
    display: 'flex',
    gap: 4,
    justifyContent: 'flex-start',
    fontFamily: fontMontserrat('normal'),
    backgroundColor: 'white',
  },
  textErrorMessage: {
    fontSize: 12,
    color: cDanger[500],
    letterSpacing: 0.3,
    lineHeight: 16,
    fontFamily: fontMontserrat('normal'),
    backgroundColor: 'white',
  },
});
