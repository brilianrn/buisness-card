import { UseMutationResult } from '@tanstack/react-query';
import { ResponseREST } from '../../../core/api/response';
import { ILoginPayload } from '../domain/request';
import { IDataLogin } from '../domain/response';

export default interface IAuthController {
  login: UseMutationResult<ResponseREST<IDataLogin>, unknown, ILoginPayload, unknown>;
}
