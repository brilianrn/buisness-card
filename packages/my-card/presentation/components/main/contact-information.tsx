import React, { FC } from 'react';
import { IDataProfile } from '../../../domain/response';
import { CompanyInformationEdit, ContactInformationEdit } from '../my-card';

const ContactInformation: FC<{ data: IDataProfile }> = ({ data }) => {
  return (
    <React.Fragment>
      <ContactInformationEdit data={data} />
      <CompanyInformationEdit data={data} />
    </React.Fragment>
  );
};

export default ContactInformation;
