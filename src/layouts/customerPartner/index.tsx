import { FooterPage, HeaderPage } from 'components';
import { PartnersCustomersComponent } from 'components/about/partnersCustomers';
import React from 'react';

export const customerPartnerLayout: React.FC = () => {
  return (
    <>
      <HeaderPage />
      <PartnersCustomersComponent />
      <FooterPage />
    </>
  );
};
