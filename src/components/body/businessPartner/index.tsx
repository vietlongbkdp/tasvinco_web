import { BusinessPartners } from 'components/page/business-partners';
import { BusunessData } from 'components/page/business-partners/constant';
import React from 'react';
import Slider from 'react-slick';
import { BusinessMain, BusinessMainStyles, TitleContent } from './styled';

export const BusinessPartnersComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <BusinessMain>
      <TitleContent>Đối tác lâu năm của chúng tôi</TitleContent>
      <BusinessMainStyles>
        <Slider {...settings}>
          {BusunessData.length && BusunessData.map((data) => <BusinessPartners props={data.images} key={data.id} />)}
        </Slider>
      </BusinessMainStyles>
    </BusinessMain>
  );
};
