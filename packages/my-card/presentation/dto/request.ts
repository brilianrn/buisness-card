export interface IProfileEdit {
  full_name: string;
  description: string;
  url_img?: string;
  instagram: string;
  twitter: string;
  linkedin: string;
}

export type TIncrement = {
  id?: string;
  increment_id?: number;
};

export type TPhone = TIncrement & {
  phone_number: string;
};

export type TEmail = TIncrement & {
  address: string;
};

export type TWebsite = TIncrement & {
  link: string;
};

export interface IContactInformation {
  contact: Array<TPhone>;
  email: Array<TEmail>;
  website: Array<TWebsite>;
}

export interface ICompanyInformation {
  job_title: string;
  name: string;
  address: string;
}

export interface IFormPortofolio {
  filename: string;
  description: string;
  file: string;
}
