import { BackgroundImage } from 'assets';
import styled from 'styled-components';

export const BusinessMain = styled.div`
  padding-block: 80px;
  background-image: url(${BackgroundImage});
  margin-bottom: 80px;
`;

export const BusinessMainStyles = styled.div`
  width: 80%;
  margin-inline: auto;

  .slick-prev,
  .slick-next {
    width: 50px;
    height: 50px;
    z-index: 1;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 50px;
    color: #fff;
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  margin-bottom: 50px;
  font-size: 30px;
  font-weight: 900;
  color: #fff;
  text-transform: uppercase;
`;
