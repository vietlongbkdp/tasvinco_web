import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { MainProductData } from 'components/page/main-product/constant';
import { MainProduct } from 'components/page/main-product';
import { ContentTitle, SectionStyle, StyledMainProduct } from './styled';

export const MainProductComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    rows: 2,
  };
  return (
    <SectionStyle>
      <ContentTitle>Dòng sản phẩm chính</ContentTitle>
      <StyledMainProduct>
        <Slider {...settings}>
          {MainProductData.length &&
            MainProductData.map((data) => (
              <MainProduct content={data.content} images={data.images} key={data.id} id={0} />
            ))}
        </Slider>
      </StyledMainProduct>
    </SectionStyle>
  );
};
