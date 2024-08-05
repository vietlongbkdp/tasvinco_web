import { FC } from 'react';

import { ContentStyle, ImageBox, ImageStyle, MainProductStyle } from './styled';

export type IPropsMainProduct = {
  // eslint-disable-next-line react/no-unused-prop-types
  id: number;
  content: string;
  images: string;
};

export const MainProduct: FC<IPropsMainProduct> = ({ content, images }) => {
  return (
    <MainProductStyle>
      <ImageBox>
        <ImageStyle src={images} alt="images" />
      </ImageBox>
      <ContentStyle>{content}</ContentStyle>
    </MainProductStyle>
  );
};
