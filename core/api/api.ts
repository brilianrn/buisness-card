import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import validationMessage from '../../constants/validation-message';
import logger from '../../shared/logger';
import { ResponseREST } from './response';
import { serializeParam } from './utils';

export const http: AxiosInstance = axios.create({
  baseURL: process.env.DBC_BASE_URL,
  timeout: Number(process.env.TIMEOUT || 20000),
});

const get = async <T extends object | string | unknown | undefined>({
  endpoint,
  config,
  queryParam,
}: {
  endpoint: string;
  queryParam?: Record<string, any>; // eslint-disable-line
  config?: AxiosRequestConfig;
}): Promise<ResponseREST<T>> => {
  let url = endpoint;
  if (queryParam && Object.keys(queryParam).length > 0) {
    url = url + '?' + serializeParam(queryParam);
  }
  try {
    const res = await http.get(url, config);
    if (res.status !== 200) {
      logger(`API Get [${url}]`, res?.data);
      return { ...res.data, success: false, code: res?.status?.toString() };
    }
    return { ...res.data, code: res?.status?.toString() };
  } catch (error: unknown) {
    logger(`Error - API Get [${url}]`, error);
    if (axios.isAxiosError(error)) {
      const errData: ResponseREST<T> = error.response?.data;
      return { success: false, message: errData.message, code: '500' };
    }
    return { success: false, message: validationMessage[500], code: '500' };
  }
};

const post = async <T extends object | string | unknown | undefined>({
  endpoint,
  body,
  config,
  queryParam,
}: {
  endpoint: string;
  body?: Record<string, any>; // eslint-disable-line
  queryParam?: Record<string, any>; // eslint-disable-line
  config?: AxiosRequestConfig;
}): Promise<ResponseREST<T>> => {
  let url = endpoint;
  if (queryParam && Object.keys(queryParam).length > 0) {
    url = url + '?' + serializeParam(queryParam);
  }
  try {
    const res = await http.post(url, body, config);
    if (res.status !== 200) {
      logger(`API Post [${url}]`, res?.data);
      return { ...res.data, success: false, code: res?.status?.toString() };
    }
    return { ...res.data, code: res?.status?.toString() };
  } catch (error: unknown) {
    logger(`Error - API Post [${url}]`, error);
    if (axios.isAxiosError(error)) {
      const errData: ResponseREST<T> = error.response?.data;
      return { success: false, message: errData.message, code: '500' };
    }
    return { success: false, message: validationMessage[500], code: '500' };
  }
};

const put = async <T extends object | string | unknown | undefined>({
  endpoint,
  body,
  config,
  queryParam,
}: {
  endpoint: string;
  body?: Record<string, any>; // eslint-disable-line
  queryParam?: Record<string, any>; // eslint-disable-line
  config?: AxiosRequestConfig;
}): Promise<ResponseREST<T>> => {
  let url = endpoint;
  if (queryParam && Object.keys(queryParam).length > 0) {
    url = url + '?' + serializeParam(queryParam);
  }
  try {
    const res = await http.put(url, body, config);
    if (res.status !== 200) {
      logger(`API Put [${url}]`, res?.data);
      return { ...res.data, success: false, code: res?.status?.toString() };
    }
    return { ...res.data, code: res?.status?.toString() };
  } catch (error: unknown) {
    logger(`Error - API Put [${url}]`, error);
    if (axios.isAxiosError(error)) {
      const errData: ResponseREST<T> = error.response?.data;
      return { success: false, message: errData.message, code: '500' };
    }
    return { success: false, message: validationMessage[500], code: '500' };
  }
};

const patch = async <T extends object | string | unknown | undefined>({
  endpoint,
  body,
  config,
  queryParam,
}: {
  endpoint: string;
  body?: Record<string, any>; // eslint-disable-line
  queryParam?: Record<string, any>; // eslint-disable-line
  config?: AxiosRequestConfig;
}): Promise<ResponseREST<T>> => {
  let url = endpoint;
  if (queryParam && Object.keys(queryParam).length > 0) {
    url = url + '?' + serializeParam(queryParam);
  }
  try {
    const res = await http.patch(url, body, config);
    if (res.status !== 200) {
      logger(`API Patch [${url}]`, res?.data);
      return { ...res.data, success: false, code: res?.status?.toString() };
    }
    return { ...res.data, code: res?.status?.toString() };
  } catch (error: unknown) {
    logger(`Error - API Patch [${url}]`, error);
    if (axios.isAxiosError(error)) {
      const errData: ResponseREST<T> = error.response?.data;
      return { success: false, message: errData.message, code: '500' };
    }
    return { success: false, message: validationMessage[500], code: '500' };
  }
};

const apiDelete = async <T extends object | string | unknown | undefined>({
  endpoint,
  bodyparam,
  config,
  queryParam,
}: {
  endpoint: string;
  bodyparam?: any; // eslint-disable-line
  queryParam?: Record<string, any>; // eslint-disable-line
  config?: AxiosRequestConfig;
}): Promise<ResponseREST<T>> => {
  let url = endpoint;
  if (queryParam && Object.keys(queryParam).length > 0) {
    url = url + '?' + serializeParam(queryParam);
  }
  try {
    const axiosConfig: AxiosRequestConfig = {
      ...config,
      data: bodyparam,
    };
    const res = await http.delete(url, axiosConfig);
    if (res.status !== 200) {
      logger(`API Delete [${url}]`, res?.data);
      return { ...res.data, success: false, code: res?.status?.toString() };
    }
    return { ...res.data, code: res?.status?.toString() };
  } catch (error: unknown) {
    logger(`Error - API Delete [${url}]`, error);
    if (axios.isAxiosError(error)) {
      const errData: ResponseREST<T> = error.response?.data;
      return { success: false, message: errData.message, code: '500' };
    }
    return { success: false, message: validationMessage[500], code: '500' };
  }
};

const api = {
  delete: apiDelete,
  get,
  post,
  put,
  patch,
  http,
};

export default api;
