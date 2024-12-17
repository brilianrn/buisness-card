import { UseMutationResult, UseQueryResult } from '@tanstack/react-query';
import { ResponseREST } from '../../../core/api/response';
import { IEditPayload } from '../domain/request';
import { IDataProfile } from '../domain/response';
import { TEmail, TPhone, TWebsite } from '../presentation/dto/request';

export default interface IMyCardController {
  profile: UseQueryResult<ResponseREST<IDataProfile>>;
  updateProfile: UseMutationResult<ResponseREST<undefined>, unknown, IEditPayload>;
  updateSosmed: UseMutationResult<ResponseREST<undefined>, unknown, IEditPayload>;
  changeImage: UseMutationResult<ResponseREST<undefined>, unknown, string>;
  createPhone: UseMutationResult<ResponseREST<undefined>, unknown, TPhone>;
  updatePhone: UseMutationResult<ResponseREST<undefined>, unknown, TPhone & { id: string }>;
  deletePhone: UseMutationResult<ResponseREST<undefined>, unknown, string>;
  createEmail: UseMutationResult<ResponseREST<undefined>, unknown, TEmail>;
  updateEmail: UseMutationResult<ResponseREST<undefined>, unknown, TEmail & { id: string }>;
  deleteEmail: UseMutationResult<ResponseREST<undefined>, unknown, string>;
  createWebsite: UseMutationResult<ResponseREST<undefined>, unknown, TWebsite>;
  updateWebsite: UseMutationResult<ResponseREST<undefined>, unknown, TWebsite & { id: string }>;
  deleteWebsite: UseMutationResult<ResponseREST<undefined>, unknown, string>;
}
