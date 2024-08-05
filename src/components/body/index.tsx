import { SwiperNav } from 'components/swiper/feature/swiper-nav';
import { MainProductComponent } from 'components/body/mainProduct';

import { BodyStyle } from './styled';

export const BodyComponent = () => {
  return (
    <BodyStyle>
      <SwiperNav />
      <MainProductComponent />
    </BodyStyle>
  );
};
