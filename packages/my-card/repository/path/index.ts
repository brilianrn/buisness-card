import { TPrefixContactInfo, TPrefixSosmed, TPrefixTitle } from '../../domain/request';

export default {
  profile: '/users/my-profile',
  updateProfile: (prefix: TPrefixTitle) => `/users/modify/title/${prefix}`,
  socialNetwork: (prefix: TPrefixSosmed) => `/users/modify/sosial-network/${prefix}`,
  addPhone: '/users/add/contact',
  changeImage: '/users/change/image',
  addContactInformation: (prefix: TPrefixContactInfo) => `/users/add/${prefix}`,
  updateContactInformation: (prefix: TPrefixContactInfo, id: string) =>
    `/users/modify/${prefix}/${id}`,
  deleteContactInformation: (prefix: TPrefixContactInfo, id: string) =>
    `/users/drop/${prefix}/${id}`,
};
