import { StyleSheet } from 'react-native';
import { cDark } from './colors';

export const styles: Record<string, object> = StyleSheet.create({
  between: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  start: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  end: {
    flexDirection: 'row-reverse',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  card: {
    width: '100%',
    borderRadius: 8,
    backgroundColor: cDark[200],
    padding: 16,
  },
});
