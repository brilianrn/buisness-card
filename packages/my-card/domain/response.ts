export interface IDataProfile {
  _id: string;
  account_id: string;
  full_name: string;
  description: string;
  username: string;
  sosial_network: ISosialNetwork;
  email: IEmail[];
  website: IWebsite[];
  contact: IContact[];
  company: ICompany;
  geo: IGeo;
  created_at: number;
  updated_at: number;
  type: string;
  url_img: string;
  url_background: string;
}

export interface ICompany {
  job_title: string;
  name: string;
  address: string;
}

export interface IContact {
  id: string;
  phone_number: string;
}

export interface IEmail {
  id: string;
  address: string;
}

export interface IGeo {
  lat: number;
  lon: number;
  address: string;
}

export interface ISosialNetwork {
  instagram: string;
  twitter: string;
  linkedin: string;
}

export interface IWebsite {
  id: string;
  link: string;
}
