import { ResponseREST } from '../../../core/api/response';
import { ILoginPayload } from '../domain/request';
import { IDataLogin } from '../domain/response';

export default interface IAuthUseCase {
  login: (payload: ILoginPayload) => Promise<ResponseREST<IDataLogin>>;
}
