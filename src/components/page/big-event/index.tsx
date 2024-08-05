import { ContentText, ContentTitle, ImagesBox, ImagesStyle, MainStyles } from './styled';

export const BigEventStyles = ({ images, title, content }) => {
  return (
    <MainStyles>
      <ImagesBox>
        <ImagesStyle src={images} alt="images" />
      </ImagesBox>
      <ContentTitle>{title}</ContentTitle>
      <ContentText>{content}</ContentText>
    </MainStyles>
  );
};
