import { UseMutationResult } from '@tanstack/react-query';
import { ResponseREST } from '../../../core/api/response';
import { IDataProfile } from '../domain/response';

export default interface IMyCardController {
  profile: UseMutationResult<ResponseREST<IDataProfile>, unknown, void, unknown>;
}
