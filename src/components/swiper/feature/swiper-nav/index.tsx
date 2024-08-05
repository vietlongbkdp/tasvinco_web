import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { SlidersStyledComponent } from './styled';
import { BannerData } from './constant';
import { BannerComponent } from '../banner';

export const SwiperNav = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };

  return (
    <SlidersStyledComponent>
      <Slider {...settings}>
        {BannerData.length && BannerData.map((data) => <BannerComponent props={data.image} key={data.id} />)}
      </Slider>
    </SlidersStyledComponent>
  );
};
