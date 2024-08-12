import Slider from 'react-slick';

// Import CSS slick-carousel
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { CustomNextArrow, CustomPrevArrow } from 'components/next-prev';
import {
  StrategicPartner,
  StrategicPartnerBox,
  StrategicPartnerContent,
  StrategicPartnerImages,
  StrategicPartnerStyles,
  StrategicPartnerTitle,
} from './styled';
import { StrategicPartnerData } from './constant';

export const StrategicPartnerComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    rows: 2,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
  };
  return (
    <StrategicPartnerStyles>
      <StrategicPartnerTitle>Đối tác chiến lược</StrategicPartnerTitle>
      <StrategicPartner>
        <Slider {...settings}>
          {StrategicPartnerData.length &&
            StrategicPartnerData.map((data) => {
              return (
                <StrategicPartnerBox key={data.id}>
                  <StrategicPartnerImages src={data.images} />
                  <StrategicPartnerContent>{data.content}</StrategicPartnerContent>
                </StrategicPartnerBox>
              );
            })}
        </Slider>
      </StrategicPartner>
    </StrategicPartnerStyles>
  );
};
