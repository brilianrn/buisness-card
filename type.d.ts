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

export type Messages = typeof en;

declare global {
  /* eslint-disable-next-line */
  interface IntlMessages extends Messages {}
}
