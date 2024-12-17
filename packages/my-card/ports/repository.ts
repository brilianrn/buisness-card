import { ResponseREST } from '../../../core/api/response';
import { IEditPayload } from '../domain/request';
import { IDataProfile } from '../domain/response';
import { TEmail, TPhone, TWebsite } from '../presentation/dto/request';

export default interface IMyCardRespository {
  profile: () => Promise<ResponseREST<IDataProfile>>;
  updateProfile: (payload: IEditPayload) => Promise<ResponseREST<undefined>>;
  updateSosmed: (payload: IEditPayload) => Promise<ResponseREST<undefined>>;
  changeImage: (base64: string) => Promise<ResponseREST<undefined>>;
  createPhone: (payload: TPhone) => Promise<ResponseREST<undefined>>;
  updatePhone: (payload: TPhone & { id: string }) => Promise<ResponseREST<undefined>>;
  deletePhone: (id: string) => Promise<ResponseREST<undefined>>;
  createEmail: (payload: TEmail) => Promise<ResponseREST<undefined>>;
  updateEmail: (payload: TEmail & { id: string }) => Promise<ResponseREST<undefined>>;
  deleteEmail: (id: string) => Promise<ResponseREST<undefined>>;
  createWebsite: (payload: TWebsite) => Promise<ResponseREST<undefined>>;
  updateWebsite: (payload: TWebsite & { id: string }) => Promise<ResponseREST<undefined>>;
  deleteWebsite: (id: string) => Promise<ResponseREST<undefined>>;
}
