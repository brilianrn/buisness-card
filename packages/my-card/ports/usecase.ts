import { ResponseREST } from '../../../core/api/response';
import { IDataProfile } from '../domain/response';

export default interface IMyCardUseCase {
  profile: () => Promise<ResponseREST<IDataProfile>>;
}
