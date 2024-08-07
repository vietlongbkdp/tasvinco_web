import { StrategicPartnerComponent } from './feature/strategicPartner';
import { PartnersCustomersStyles, PartnersCustomersTitle } from './styled';

export const PartnersCustomersComponent = () => {
  return (
    <PartnersCustomersStyles>
      <PartnersCustomersTitle>Đối tác & Khách hàng</PartnersCustomersTitle>
      <StrategicPartnerComponent />
      <StrategicPartnerComponent />
    </PartnersCustomersStyles>
  );
};
