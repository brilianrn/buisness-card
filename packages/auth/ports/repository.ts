import { ResponseREST } from '../../../core/api/response';
import { ILoginPayload } from '../domain/request';
import { IDataLogin } from '../domain/response';

export default interface IAuthRepository {
  login: (payload: ILoginPayload) => Promise<ResponseREST<IDataLogin>>;
}
