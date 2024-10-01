import React from 'react';
import { ICEdit, ICShare } from '../../../assets/icons/main';
import { Div, Tab } from '../../../components';
import { MainHeader, ProfileCard } from '../../my-card/presentation/components';
import { DetailInformation, Portofolio } from '../components';

const ConnectionDetail = () => {
  return (
    <React.Fragment>
      <Div px={16}>
        <MainHeader
          title="Buisness Card"
          titlePosition="center"
          leftIcons={[ICEdit]}
          rightIcons={[ICShare]}
        />
        <ProfileCard />
      </Div>
      <Tab
        mt={12}
        tabs={[
          { title: 'Detail Information', component: DetailInformation },
          { title: 'Portofolio', component: Portofolio },
        ]}
      />
    </React.Fragment>
  );
};

export default ConnectionDetail;
