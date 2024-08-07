import { FooterPage, HeaderPage } from 'components';
import { AboutHeaderComponent } from 'components/about/aboutHeader';
import { MemberCompanyComponent } from 'components/about/memberCompany';
import { PageAboutComponent } from 'components/about/PageAbout';
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
