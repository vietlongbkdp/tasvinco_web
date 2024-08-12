import { FooterPage, HeaderPage } from 'components';
import { GoogleMapsEmbed } from 'components/body/googleMap';
import { ContactComponent } from 'components/contact';
import React from 'react';

export const ContactLayout: React.FC = () => {
  return (
    <>
      <HeaderPage />
      <ContactComponent />
      <GoogleMapsEmbed />
      <FooterPage />
    </>
  );
};
