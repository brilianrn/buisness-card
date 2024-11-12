export type TResponseCode =
  | '200'
  | '201'
  | '204'
  | '400'
  | '401'
  | '403'
  | '404'
  | '405'
  | '408'
  | '409'
  | '410'
  | '500'
  | '502'
  | '503'
  | '504';

export interface ResponseREST<T extends object | string> {
  success: boolean;
  message: string;
  code?: TResponseCode;
  result?: T;
}
