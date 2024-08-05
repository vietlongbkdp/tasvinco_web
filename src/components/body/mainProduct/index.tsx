import { MainProductData } from 'components/page/main-product/constant';
import { MainProduct } from 'components/page/main-product';
import { ContentTitle, SectionStyle, StyledMainProduct } from './styled';

export const MainProductComponent = () => {
  return (
    <SectionStyle>
      <ContentTitle>Dòng sản phẩm chính</ContentTitle>
      <StyledMainProduct>
        {MainProductData.length &&
          MainProductData.map((data) => (
            <MainProduct content={data.content} images={data.images} key={data.id} id={0} />
          ))}
      </StyledMainProduct>
    </SectionStyle>
  );
};
