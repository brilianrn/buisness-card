import validationMessage from '../../../../constants/validation-message';
import { api } from '../../../../core/api';
import { IDataProfile } from '../../domain/response';
import IMyCardRespository from '../../ports/repository';
import authPath from '../path';

export class Repository implements IMyCardRespository {
  profile = async () => {
    try {
      return await api.get<IDataProfile>({
        endpoint: authPath.profile,
      });
    } catch (error) {
      return { message: validationMessage[500], success: false };
    }
  };
}
