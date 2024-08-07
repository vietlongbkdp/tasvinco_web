import { ContentStyles, ImagesStyles, PeopleStyles, TitleStyles } from './styled';

export const PeopleComponent = () => {
  return (
    <>
      <ImagesStyles src="https://weldcom.vn/wp-content/uploads/2021/06/168907303-1202839476813598-486025743419218411-n.png.webp" />
      <PeopleStyles>
        <TitleStyles>Con người tasvinco</TitleStyles>
        <ContentStyles>
          Ở Tasvinco, tài sản gì cũng quý, nhưng quý giá nhất là con người, và đôi bàn tay của kỹ thuật là vô giá. Chúng
          tôi rất quan tâm đến môi trường làm việc và nâng cao khả năng phát triển bản thân cho nhân viên, tạo điều kiện
          tốt nhất cho mỗi cá nhân đều được hạnh phúc khi làm việc và phát huy hết sở trường của bản thân mình.
        </ContentStyles>
        <ContentStyles>
          Với đội ngũ kỹ thuật, nòng cốt cho chất lượng dịch vụ của Tasvinco, chúng tôi không chỉ nâng cao kỹ năng
          chuyên môn bằng các chương trình đào tạo mà còn tạo dựng một môi trường lành mạnh, tích cực, sẵn sàng sẻ chia
          và không ngừng học hỏi để đồng hành cùng phát triển với từng cá nhân.
        </ContentStyles>
        <ContentStyles>
          Luôn luôn giữ vững tinh thần phụng sự Khách hàng là số 1, mỗi người Tasvinco sẽ là hình ảnh đại diện xứng đáng
          cho vị thế dẫn đầu trong ngành cơ khí, gia công kim loại Việt Nam.
        </ContentStyles>
      </PeopleStyles>
    </>
  );
};
