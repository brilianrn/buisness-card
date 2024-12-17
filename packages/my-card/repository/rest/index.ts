import validationMessage from '../../../../constants/validation-message';
import { api } from '../../../../core/api';
import logger from '../../../../shared/logger';
import { IEditPayload, TPrefixSosmed, TPrefixTitle } from '../../domain/request';
import { IDataProfile } from '../../domain/response';
import IMyCardRespository from '../../ports/repository';
import { TEmail, TPhone, TWebsite } from '../../presentation/dto/request';
import path from '../path';

export class Repository implements IMyCardRespository {
  profile = async () => {
    try {
      const res = await api.get<IDataProfile>({
        endpoint: path.profile,
      });
      return res;
    } catch (error) {
      return { message: validationMessage[500], success: false };
    }
  };

  updateProfile = async ({ value, prefix }: IEditPayload) => {
    try {
      return await api.put<undefined>({
        endpoint: path.updateProfile(prefix as unknown as TPrefixTitle),
        body: { value },
      });
    } catch (error) {
      return { message: validationMessage[500], success: false };
    }
  };

  updateSosmed = async ({ value, prefix }: IEditPayload) => {
    try {
      return await api.put<undefined>({
        endpoint: path.socialNetwork(prefix as unknown as TPrefixSosmed),
        body: { value },
      });
    } catch (error) {
      return { message: validationMessage[500], success: false };
    }
  };

  changeImage = async (base64: string) => {
    try {
      const body = new FormData();
      body.append('image', {
        uri: base64,
        type: 'image/jpeg',
        name: new Date().toString(),
      });
      const res = await api.post<undefined>({
        endpoint: path.changeImage,
        config: {
          headers: {
            'content-type': 'multipart/form-data',
          },
        },
        body,
      });
      return res;
    } catch (error) {
      logger('POST Change Image', error);
      return { message: validationMessage[500], success: false };
    }
  };

  createPhone = async (body: TPhone) => {
    try {
      return await api.post<undefined>({
        endpoint: path.addContactInformation('contact'),
        body,
      });
    } catch (error) {
      return { message: validationMessage[500], success: false };
    }
  };

  updatePhone = async ({ id, phone_number }: TPhone & { id: string }) => {
    try {
      return await api.put<undefined>({
        endpoint: path.updateContactInformation('contact', id),
        body: { phone_number },
      });
    } catch (error) {
      return { message: validationMessage[500], success: false };
    }
  };

  deletePhone = async (id: string) => {
    try {
      return await api.delete<undefined>({
        endpoint: path.deleteContactInformation('contact', id),
      });
    } catch (error) {
      return { message: validationMessage[500], success: false };
    }
  };

  createEmail = async (body: TEmail) => {
    try {
      return await api.post<undefined>({
        endpoint: path.addContactInformation('email'),
        body,
      });
    } catch (error) {
      return { message: validationMessage[500], success: false };
    }
  };

  updateEmail = async ({ id, address }: TEmail & { id: string }) => {
    try {
      return await api.put<undefined>({
        endpoint: path.updateContactInformation('email', id),
        body: { address },
      });
    } catch (error) {
      return { message: validationMessage[500], success: false };
    }
  };

  deleteEmail = async (id: string) => {
    try {
      return await api.delete<undefined>({
        endpoint: path.deleteContactInformation('email', id),
      });
    } catch (error) {
      return { message: validationMessage[500], success: false };
    }
  };

  createWebsite = async (body: TWebsite) => {
    try {
      return await api.post<undefined>({
        endpoint: path.addContactInformation('website'),
        body,
      });
    } catch (error) {
      return { message: validationMessage[500], success: false };
    }
  };

  updateWebsite = async ({ id, link }: TWebsite & { id: string }) => {
    try {
      return await api.put<undefined>({
        endpoint: path.updateContactInformation('website', id),
        body: { link },
      });
    } catch (error) {
      return { message: validationMessage[500], success: false };
    }
  };

  deleteWebsite = async (id: string) => {
    try {
      return await api.delete<undefined>({
        endpoint: path.deleteContactInformation('website', id),
      });
    } catch (error) {
      return { message: validationMessage[500], success: false };
    }
  };
}
