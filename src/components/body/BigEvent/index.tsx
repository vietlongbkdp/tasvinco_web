import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BigEventData } from 'components/page/big-event/constant';
import { BigEventStyles } from 'components/page/big-event';
import { BigEventMain, ContentStyles } from './styled';

export const BigEventComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 5000,
    cssEase: 'linear',
  };
  return (
    <BigEventMain>
      <ContentStyles>SỰ KIỆN NỔI BẬT</ContentStyles>
      <Slider {...settings}>
        {BigEventData.length > 0 &&
          BigEventData.map((data) => <BigEventStyles images={data.images} title={data.title} content={data.content} />)}
      </Slider>
    </BigEventMain>
  );
};
