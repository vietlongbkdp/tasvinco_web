import { ImageStyle, SlidersStyled } from './styled';

export const BannerComponent = ({ props }) => {
  return (
    <SlidersStyled>
      <ImageStyle src={props} alt="image" />
    </SlidersStyled>
  );
};
