import en from './assets/messages/en.json';

declare module '*.svg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.webp';
declare module '*.gif';
declare module '*.css';

declare module '*.svg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.jpg';
declare module '*.gif';
declare module '*.css';

declare module 'react-native-vector-icons/FontAwesome';
declare module 'react-native-vector-icons/Ionicons';
declare module 'react-native-vector-icons/MaterialIcons';
declare module 'react-native-vector-icons/Feather';
declare module 'react-native-vector-icons/MaterialCommunityIcons';
declare module 'react-native-vector-icons/Entypo';
declare module 'react-native-vector-icons/EvilIcons';
declare module 'react-native-vector-icons/Octicons';
declare module 'react-native-vector-icons/Zocial';

export type Messages = typeof en;

declare global {
  /* eslint-disable-next-line */
  interface IntlMessages extends Messages {}
}
