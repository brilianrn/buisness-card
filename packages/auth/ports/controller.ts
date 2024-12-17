import { UseMutationResult } from '@tanstack/react-query';
import { ResponseREST } from '../../../core/api/response';
import { ILoginPayload, IRegisterPayload } from '../domain/request';
import { IDataLogin } from '../domain/response';

export default interface IAuthController {
  login: UseMutationResult<ResponseREST<IDataLogin>, unknown, ILoginPayload, unknown>;
  register: UseMutationResult<ResponseREST<undefined>, unknown, IRegisterPayload, unknown>;
  forgotPassword: UseMutationResult<ResponseREST<undefined>, unknown, string, unknown>;
  onSignOut: () => Promise<void>;
}
