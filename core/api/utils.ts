import logger from '../../shared/logger';
import api from './api';

/* eslint-disable-next-line */
export const serializeParam = (obj: Record<string, any>): string => {
  let resolveObj = {};
  Object.entries(obj).forEach(([key, value]) => {
    if (obj[key]) {
      resolveObj = { ...resolveObj, [key]: value };
    }
  });

  const params = new URLSearchParams(resolveObj);
  return params.toString();
};

/* eslint-disable-next-line */
export const deserializeParam = (str: string): Record<string, any> => {
  const params = new URLSearchParams(str);
  /* eslint-disable-next-line */
  const obj: Record<string, any> = {};

  params.forEach((value, key) => {
    obj[key] = value;
  });

  return obj;
};

export const setAuthorizationHeader = (token?: string): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    try {
      if (token) {
        api.http.defaults.headers.common['authorization'] = token;
        resolve(true);
      } else {
        resolve(false);
        logger('Set Authorization Header', 'Token is missing.');
      }
    } catch (error) {
      logger('Error-Set Authorization Header', error);
      reject(false);
    }
  });
};

export const bearerToken = (token: string): string => {
  return `Bearer ${token}`;
};
