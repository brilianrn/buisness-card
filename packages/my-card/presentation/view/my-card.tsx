import React from 'react';
import { TabNoGesture } from '../../../../components';
import { useAuth } from '../../../auth/presentation/controller';
import { IDataProfile } from '../../domain/response';
import { ProfileEdit } from '../components';
import ContactInformation from '../components/main/contact-information';
import Portofolio from '../components/main/portofolio';
import { useMyCard } from '../controller';

const MyCardView = () => {
  const { onSignOut } = useAuth();

  const {
    profile: { data: profile },
  } = useMyCard();

  return (
    <React.Fragment>
      <ProfileEdit data={profile?.result as IDataProfile} />
      <TabNoGesture<'Contact' | 'Portofolio'>
        mt={16}
        tabs={[
          { label: 'Contact', icon: 'vcard-o' },
          { label: 'Portofolio', icon: 'file-text-o' },
        ]}
        activeDefault="Contact">
        <TabNoGesture.Item tab="Contact">
          <ContactInformation data={profile?.result as IDataProfile} />
        </TabNoGesture.Item>
        <TabNoGesture.Item tab="Portofolio">
          <Portofolio />
        </TabNoGesture.Item>
      </TabNoGesture>
    </React.Fragment>
  );
};

export default MyCardView;
