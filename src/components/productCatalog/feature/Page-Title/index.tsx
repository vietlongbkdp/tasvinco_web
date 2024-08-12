import { Link } from 'react-router-dom';
import {
  ImageStyles,
  PageContent,
  PageImage,
  PageImageContentBox,
  PageTitle,
  PageTitleBox,
  PageTitleBoxStyles,
  PageTitleContent,
  PageTitleContentBox,
} from './styled';

export const PageTitlesComponent: React.FC = () => {
  return (
    <PageTitleBoxStyles>
      <ImageStyles src="https://weldcom.vn/wp-content/uploads/2021/08/may-cat-cnc-banner.jpg" />
      <PageTitleBox>
        <PageTitleContentBox>
          <PageTitleContent>Máy cắt CNC</PageTitleContent>
          <PageTitleContent>
            <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>
              Trang chủ
            </Link>{' '}
            / Máy cắt CNC
          </PageTitleContent>
        </PageTitleContentBox>
        <PageTitle>
          <PageImageContentBox>
            <PageImage src="https://weldcom.vn/wp-content/uploads/2021/08/may-cat-cnc-profile.jpg" />
            <PageContent>
              Các loại Máy cắt cnc kim loại: Máy cắt Plasma, máy cắt Oxy Gas, máy cắt CNC, máy cắt Laser, máy cắt đĩa,
              máy cắt thủy lực của các hãng uy tín trên thế giới. Được phần phối bởi Tasvinco.
            </PageContent>
          </PageImageContentBox>
        </PageTitle>
      </PageTitleBox>
    </PageTitleBoxStyles>
  );
};
