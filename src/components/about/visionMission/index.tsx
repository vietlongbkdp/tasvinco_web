import { VisionMissionData } from './constant';
import {
  ContentEnd,
  ContentStyles,
  IconBox,
  IconCreative,
  IconFollow,
  IconGrateful,
  IconHonest,
  IconSave,
  ImagesEnd,
  ImageStyles,
  PageAboutBox,
  PageAboutContent,
  PageAboutContentBox,
  PageAboutEnd,
  PageAboutEndBox,
  PageAboutIconBox,
  PageAboutTitle,
  TitleStyles,
  VisionMissionAbout,
} from './styled';

const iconMap = { IconHonest, IconFollow, IconSave, IconGrateful, IconCreative };

export const VisionMissionComponent = () => {
  return (
    <VisionMissionAbout>
      <TitleStyles>Công ty cổ phần công nghiệp tasvinco</TitleStyles>
      <ContentStyles>Giá trị cốt lõi</ContentStyles>
      <PageAboutBox>
        {VisionMissionData.length &&
          VisionMissionData.map((data) => {
            const IconComponent = iconMap[data.icon];
            return (
              <PageAboutIconBox key={data.id}>
                <IconBox className="b-color">
                  <IconComponent className="icon-fill" />
                </IconBox>
                <PageAboutContentBox>
                  <PageAboutTitle>{data.title}</PageAboutTitle>
                  {data.contentData.length &&
                    data.contentData.map((contentMap) => (
                      <PageAboutContent key={contentMap.id}>{contentMap.Content}</PageAboutContent>
                    ))}
                </PageAboutContentBox>
              </PageAboutIconBox>
            );
          })}
      </PageAboutBox>
      <ImageStyles src="https://weldcom.vn/wp-content/uploads/2021/06/group-2.png.webp" />
      <PageAboutEndBox>
        <PageAboutEnd>
          <ImagesEnd src="https://weldcom.vn/wp-content/uploads/2021/06/02.png.webp" />
          <ContentEnd>
            Tasvicon phấn đấu trở thành một trong những thương hiệu tiêu biểu Quốc gia trước năm 2025 và trở thành một
            trong 10 doanh nghiệp hàng đầu trong ngành cơ khí của thế giới, góp phần đưa Việt Nam trở thành trung tâm
            Gia công cơ khí tiên tiến của châu Á vào năm 2030.
          </ContentEnd>
        </PageAboutEnd>
        <PageAboutEnd>
          <ImagesEnd src="https://weldcom.vn/wp-content/uploads/2021/06/02-copy.png.webp" />
          <ContentEnd>
            Tasvicon phát triển đồng hành với tiến bộ xã hội. Không kinh doanh lợi dụng hay hòa mình vào nhân tố tồn tại
            cản trở sự phát triển của xã hội. Trở thành một trong những công ty hàng đầu Việt Nam tiên tiến về văn hóa,
            quản trị và phát triển tiềm năng con người.
          </ContentEnd>
          <ContentEnd>
            Tasvicon không ngừng góp phần thu hẹp khoảng cách công nghệ giữa Việt nam và các nước phát triển bằng chiến
            lược ổn định và tầm nhìn dài hạn, từng bước đóng góp vào sự thay đổi nền công nghiệp cơ khí của Việt Nam,
            xây dựng Việt Nam thành một trung tâm gia công cơ khí tiên tiến của Châu Á và thế giới.
          </ContentEnd>
        </PageAboutEnd>
      </PageAboutEndBox>
    </VisionMissionAbout>
  );
};
