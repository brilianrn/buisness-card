export type TPrefixTitle = 'full_name' | 'description';

export type TPrefixSosmed = 'instagram' | 'twitter' | 'linkedin';

export type TPrefixContactInfo = 'website' | 'contact' | 'email';

export interface IEditPayload {
  value: string;
  prefix?: TPrefixTitle | TPrefixSosmed;
}
