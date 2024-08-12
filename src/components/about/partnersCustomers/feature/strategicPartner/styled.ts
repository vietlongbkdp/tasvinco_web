import styled from 'styled-components';

export const StrategicPartnerStyles = styled.div`
  padding: 40px;
`;
export const StrategicPartnerTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  text-align: center;
  text-transform: uppercase;
  margin-bottom: 30px;
`;
export const StrategicPartner = styled.div`
  width: 100%;
  .slick-prev,
  .slick-next {
    width: 50px;
    height: 50px;
    z-index: 1;
  }

  .slick-prev:before,
  .slick-next:before {
    font-size: 50px;
    color: #b3b3b3;
  }
`;

export const StrategicPartnerBox = styled.div`
  width: 80% !important;
  min-height: 200px;
  border: 0.5px solid #d0d0d0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`;

export const StrategicPartnerImages = styled.img`
  max-width: 100%;
  height: 300px;
  max-height: 170px;
  object-fit: contain;
  display: block;
  margin: 0 auto;
`;
export const StrategicPartnerContent = styled.div`
  border-top: solid 0.5px #d0d0d0;
  padding: 15px 0;
  font-size: 18px;
  text-align: center;
  width: 100%;
  text-transform: uppercase;
`;
