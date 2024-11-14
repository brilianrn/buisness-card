import validationMessage from '../../../../constants/validation-message';
import { api } from '../../../../core/api';
import { ILoginPayload, IRegisterPayload } from '../../domain/request';
import { IDataLogin } from '../../domain/response';
import IAuthRepository from '../../ports/repository';
import authPath from '../path';

export class Repository implements IAuthRepository {
  login = async (body: ILoginPayload) => {
    try {
      return await api.post<IDataLogin>({ endpoint: authPath.login, body });
    } catch (error) {
      return { message: validationMessage[500], success: false };
    }
  };

  register = async (body: IRegisterPayload) => {
    try {
      return await api.post({ endpoint: authPath.register, body });
    } catch (error) {
      return { message: validationMessage[500], success: false };
    }
  };

  forgotPassword = async (email: string) => {
    try {
      return await api.post({ endpoint: authPath.forgotPassword, body: { email } });
    } catch (error) {
      return { message: validationMessage[500], success: false };
    }
  };
}
