import { ImagesBox, ImagesStyle } from './styled';

export const BusinessPartners = ({ props }) => {
  return (
    <ImagesBox>
      <ImagesStyle src={props} alt="images" />
    </ImagesBox>
  );
};
