import { ResponseREST } from '../../../core/api/response';
import { ILoginPayload, IRegisterPayload } from '../domain/request';
import { IDataLogin } from '../domain/response';

export default interface IAuthUseCase {
  login: (payload: ILoginPayload) => Promise<ResponseREST<IDataLogin>>;
  register: (payload: IRegisterPayload) => Promise<ResponseREST<{}>>;
  forgotPassword: (email: string) => Promise<ResponseREST<{}>>;
}
