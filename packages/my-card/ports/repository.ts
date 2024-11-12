import { ResponseREST } from '../../../core/api/response';
import { IDataProfile } from '../domain/response';

export default interface IMyCardRespository {
  profile: () => Promise<ResponseREST<IDataProfile>>;
}
