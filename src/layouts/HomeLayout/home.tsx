import React from 'react';
import { HeaderPage, FooterPage } from 'components';
import { BodyComponent } from 'components/body';
import { BusinessPartnersComponent } from 'components/body/businessPartner';
import { NumberMain } from 'components/body/numberSection';
import { BigEventComponent } from 'components/body/BigEvent';
import { FeaturedVideoComponent } from 'components/body/FeaturedVideo';
import { GoogleMapsEmbed } from 'components/body/googleMap';

const HomeLayout: React.FC = () => {
  return (
    <>
      <HeaderPage />
      <BodyComponent />
      <BusinessPartnersComponent />
      <NumberMain />
      <BigEventComponent />
      <FeaturedVideoComponent />
      <GoogleMapsEmbed />
      <FooterPage />
    </>
  );
};

export default HomeLayout;
