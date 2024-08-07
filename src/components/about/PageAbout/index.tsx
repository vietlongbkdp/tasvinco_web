import { ContentPageAbout, PageAbout } from 'assets';
import {
  ContentBox,
  ContentStyles,
  ImageContentStyles,
  ImageStyles,
  PageAboutbox,
  PageAboutStyles,
  TitleContent,
  TitleStyles,
} from './styled';

export const PageAboutComponent = () => {
  return (
    <PageAboutStyles>
      <ImageStyles src={PageAbout} />
      <TitleStyles>Công Ty Cổ phần doanh nghiệp Tasvico</TitleStyles>
      <PageAboutbox>
        <ContentBox>
          <TitleContent>Giá trị thật</TitleContent>
          <ContentStyles>
            Dành trách nhiệm, rủi ro về phần mình vì Tasvinco hiểu rằng đó là cách thuyết phục nhất để thực hiện triết
            lý hướng đến khách hàng, hướng đến sự văn minh, hướng đến lợi ích xã hội và hướng đến tương lai. Có quá
            nhiều con đường ngắn hạn cám dỗ, người Tasvinco với hành động cụ thể hàng ngày luôn kiên định chọn “Giá trị
            thật” là ngọn đuốc soi sáng đường đi.
          </ContentStyles>
        </ContentBox>
        <ImageContentStyles src={ContentPageAbout} />
      </PageAboutbox>
    </PageAboutStyles>
  );
};
