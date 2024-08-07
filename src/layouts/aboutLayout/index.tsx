import { FooterPage, HeaderPage } from 'components';
import { AboutHeaderComponent } from 'components/about/aboutHeader';
import { DifferenceComponent } from 'components/about/difference';
import { MemberCompanyComponent } from 'components/about/memberCompany';
import { PageAboutComponent } from 'components/about/PageAbout';
import { PartnersCustomersComponent } from 'components/about/partnersCustomers';
import { PeopleComponent } from 'components/about/people';
import { VisionMissionComponent } from 'components/about/visionMission';
import { BusinessPartnersComponent } from 'components/body/businessPartner';
import { GoogleMapsEmbed } from 'components/body/googleMap';
import React, { useState } from 'react';

export const AboutLayout: React.FC = () => {
  const [selectedId, setSelectedId] = useState(1);

  const handleClick = (id: number) => {
    setSelectedId(id);
  };

  const renderContent = () => {
    switch (selectedId) {
      case 1:
        return <PageAboutComponent />;
      case 2:
        return <VisionMissionComponent />;
      case 3:
        return <MemberCompanyComponent />;
      case 4:
        return <PartnersCustomersComponent />;
      case 5:
        return <DifferenceComponent />;
      case 6:
        return <PeopleComponent />;
      default:
        return <PageAboutComponent />;
    }
  };
  return (
    <>
      <HeaderPage />
      <AboutHeaderComponent selectedId={selectedId} handleClick={handleClick} />
      {renderContent()}
      <BusinessPartnersComponent />
      <GoogleMapsEmbed />
      <FooterPage />
    </>
  );
};
