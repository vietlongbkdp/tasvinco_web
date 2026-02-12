import {
  DifferenceContent,
  DifferenceEndBox,
  DifferenceEndContentBox,
  DifferenceEndImages,
  DifferenceSartYearTitle,
  DifferenceStartBox,
  DifferenceStartLeftBox,
  DifferenceStartRightBorderBottom,
  DifferenceStartRightBTitle,
  DifferenceStartRighttBox,
  DifferenceStyles,
  DifferenceTitles,
  Images,
  ImagesEnd,
} from './styled';

export const DifferenceComponent: React.FC = () => {
  return (
    <>
      <DifferenceStyles>
        <DifferenceTitles>Đội ngũ nhân sự</DifferenceTitles>
        <DifferenceStartBox>
          <DifferenceStartLeftBox>
            <DifferenceContent>
              Đội ngũ nhân sự gắn kết và hiệu quả của Tasvinco gồm gần 500 thành viên được tuyển chọn kĩ lưỡng và đầy đủ
              kĩ năng chuyên môn. Đội ngũ lãnh đạo của chúng tôi đã được trau dồi và phát triển trong 18 năm hoạt động
              của công ty cùng với các khoá học chuyên sâu dành cho cán bộ. Mỗi thành viên của chúng tôi đều cam kết đạt
              các kết quả đột phá. Chúng tôi cùng nhau làm việc và tiếp sức, hỗ trợ nhau để thành công.
            </DifferenceContent>
            <DifferenceContent>
              Xây dựng Tasvinco như một gia đình, khơi gợi sức mạnh tập thể từ đề cao sự gắn kết là mục tiêu của chúng
              tôi. Tasvinco đã và đang xây dựng một văn hoá doanh nghiệp với những giá trị giúp mỗi cá nhân phát triển
              bản thân; tạo sự gắn kết làm nên sức mạnh tập thể. Tasvinco không chỉ là môi trường làm việc mà còn là nơi
              mỗi thành viên thể hiện tinh thần lao động với những phẩm chất, sự sáng tạo, góp phần xây dựng và phát
              triển doanh nghiệp.
            </DifferenceContent>
            <DifferenceContent>
              Xây dựng các hoạt động sinh hoạt tập thể như thể thao, team building là một trong những hoạt động được
              CBNV Tasvinco hưởng ứng.
            </DifferenceContent>
          </DifferenceStartLeftBox>
          <DifferenceStartRighttBox>
            <DifferenceStartRightBTitle>
              <strong
                style={{ textShadow: '0 2px 4px rgba(173, 173, 173, 0.5)', fontSize: '100px', fontWeight: '900' }}
              >
                18
              </strong>{' '}
              năm
            </DifferenceStartRightBTitle>
            <DifferenceSartYearTitle>Hoạt động</DifferenceSartYearTitle>
            <DifferenceStartRightBorderBottom />
            <DifferenceStartRightBTitle>
              <strong
                style={{ textShadow: '0 2px 4px rgba(173, 173, 173, 0.5)', fontSize: '100px', fontWeight: '900' }}
              >
                500
              </strong>{' '}
              thành viên
            </DifferenceStartRightBTitle>
          </DifferenceStartRighttBox>
        </DifferenceStartBox>
        <DifferenceTitles style={{ marginTop: '40px' }}>Đầu tư lấy tầm nhìn làm định hướng</DifferenceTitles>
        <DifferenceContent style={{ marginTop: '60px', marginBottom: '20px' }}>
          Tạo tầm nhìn chung: Chúng tôi làm việc với các công ty thành viên trực thuộc; các cán bộ chủ chốt để cùng nhau
          nhìn ra một tầm nhìn rõ ràng cho công ty và cho bản thân mỗi thành viên; với các chỉ tiêu có thể đo lường,
          thông thường trong giai đoạn 5 năm.
        </DifferenceContent>
        <DifferenceContent>
          Đảm bảo đội ngũ lãnh đạo công ty nhìn cùng một hướng, có chung một mục đích là điều vô cùng khó nhưng chúng
          tôi đã làm được. Trong 18 năm phát triển, Weldcom tự hào là Doanh nghiệp với đội ngũ nhân sự ổn định, luôn nỗ
          lực phát triển kế hoạch cụ thể, nhằm đạt được tầm nhìn.
        </DifferenceContent>
      </DifferenceStyles>
      <DifferenceEndBox>
        <DifferenceEndImages
          src="https://weldcom.vn/wp-content/uploads/2021/06/3-d-illustration-new-empty-warehouse-factory.png.webp"
          alt="images"
        />
        <DifferenceTitles style={{ paddingTop: '120px' }}>GIỮ KHÁCH HÀNG BẰNG DỊCH VỤ BẢO HÀNH 24H</DifferenceTitles>
        <DifferenceEndContentBox>
          <DifferenceContent style={{ paddingBlock: '60px', width: '45%' }}>
            Tasvinco luôn trung thành với tiêu chí <strong>“Giữ khách hàng bằng chất lượng”</strong>. Chú trọng nâng cao
            chất lượng dịch vụ sau bán hàng; chúng tôi với đội ngũ kĩ thuật lành nghề, dịch vụ sửa chữa - bảo hành - hậu
            mãi nhanh gọn, tự hào được đánh giá là công ty hàng đầu về chất lượng dịch vụ khách hàng. Không chỉ bảo hành
            các sản phẩm do Tasvinco cung cấp; chúng tôi sẵn sàng hỗ trợ các vấn đề kĩ thuật cho cả các sản phẩm ngoài
            hệ thống.Với quy trình bảo hành 24h; Tasvinco nhận được rất nhiều phản hồi tích cực từ phía khách hàng. Xây
            dựng được niềm tin về chất lượng sản phẩm và dịch vụ là niềm tự hào mà Tasvinco có được.
          </DifferenceContent>
          <Images
            style={{ paddingBlock: '60px' }}
            src="https://weldcom.vn/wp-content/uploads/2021/06/group-2-2-300x144.png.webp"
          />
        </DifferenceEndContentBox>
        <ImagesEnd src="https://weldcom.vn/wp-content/uploads/2021/06/business-woman.png.webp" />
      </DifferenceEndBox>
    </>
  );
};
