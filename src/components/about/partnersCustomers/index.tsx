import React from 'react';
import { StrategicPartnerComponent } from './feature/strategicPartner';
import { PartnersCustomersStyles, PartnersCustomersTitle } from './styled';

export const PartnersCustomersComponent: React.FC = () => {
  return (
    <PartnersCustomersStyles>
      <PartnersCustomersTitle>Đối tác & Khách hàng</PartnersCustomersTitle>
      <StrategicPartnerComponent />
      <StrategicPartnerComponent />
    </PartnersCustomersStyles>
  );
};
