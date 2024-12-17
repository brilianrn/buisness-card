import * as Yup from 'yup';
import validationMessage from '../../../../constants/validation-message';
import {
  ICompanyInformation,
  IContactInformation,
  IFormPortofolio,
  IProfileEdit,
  TEmail,
  TPhone,
  TWebsite,
} from './request';

export const validationProfile = Yup.object<IProfileEdit>().shape({
  full_name: Yup.string().required(validationMessage.required('Fullname')),
  description: Yup.string().required(validationMessage.required('Description')),
  instagram: Yup.string().required(validationMessage.required('Instagram')),
  twitter: Yup.string().required(validationMessage.required('Twitter')),
  linkedin: Yup.string().required(validationMessage.required('LinkedIn')),
});

const phoneForm = {
  phone_number: Yup.string().required(validationMessage.required('Phone number')),
};

const emailForm = {
  address: Yup.string().required(validationMessage.required('Email address')),
};

const websiteForm = {
  link: Yup.string().required(validationMessage.required('Link URL')),
};

export const validationContactInformation = Yup.object<IContactInformation>().shape({
  contact: Yup.array()
    .of(Yup.object<TPhone>().shape(phoneForm))
    .required(validationMessage.required('Phone number')),
  email: Yup.array()
    .of(Yup.object<TEmail>().shape(emailForm))
    .required(validationMessage.required('Email')),
  website: Yup.array()
    .of(Yup.object<TWebsite>().shape(websiteForm))
    .required(validationMessage.required('Website')),
});

export const validationCompanyInformation = Yup.object<ICompanyInformation>().shape({
  job_title: Yup.string().required(validationMessage.required('Job title')),
  name: Yup.string().required(validationMessage.required('Company name')),
  address: Yup.string().required(validationMessage.required('Company address')),
});

export const validationFormPortofolio = Yup.object<IFormPortofolio>().shape({
  filename: Yup.string().required(validationMessage.required('Filename')),
  description: Yup.string().required(validationMessage.required('Description')),
  file: Yup.string().required(validationMessage.required('File')),
});
