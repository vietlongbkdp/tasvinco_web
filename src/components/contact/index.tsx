import React from 'react';
import { BackgroundContact, LogoWhite } from 'assets';
import {
  ButtonStyled,
  ContacrFormLeftBox,
  ContacrFormRightBox,
  ContactFormStyles,
  ContactInput,
  ContactStyles,
  ContactTitleStyles,
  Content,
  ContentBoxStyles,
  IconAddress,
  IconEmail,
  IconPhoneCall,
  IconPhoneCalls,
  ImagesContainer,
  ImagesStyles,
  LogoStyles,
  PhoneCallBox,
  TextareaStyled,
  TitleLeft,
  TitleStyles,
} from './styled';

export const ContactComponent: React.FC = () => {
  return (
    <>
      <ImagesContainer>
        <ImagesStyles src={BackgroundContact} />
        <TitleStyles>
          Liên hệ với chúng tôi
          <br /> để được tư vấn miễn phí
        </TitleStyles>
      </ImagesContainer>
      <ContactStyles>
        <ContactTitleStyles>Liên hệ với chúng tôi</ContactTitleStyles>
        <ContactFormStyles>
          <ContacrFormLeftBox>
            <LogoStyles src={LogoWhite} />
            <TitleLeft>Công ty cổ phần doanh nghiệp Tasvinco</TitleLeft>
            <ContentBoxStyles>
              <IconAddress />
              <Content>Thôn Trung Thành, Xã Tam Mỹ Tây, Huyện Núi Thành, Tỉnh Quảng Nam, Việt Nam</Content>
            </ContentBoxStyles>
            <ContentBoxStyles>
              <IconPhoneCall />
              <Content>0369.986.170 - 0987.700.421</Content>
            </ContentBoxStyles>
            <ContentBoxStyles>
              <IconEmail />
              <Content>infor@tasvinco.com</Content>
            </ContentBoxStyles>
            <PhoneCallBox>
              <IconPhoneCalls />
              <Content>0369.986.170</Content>
            </PhoneCallBox>
          </ContacrFormLeftBox>
          <ContacrFormRightBox>
            <ContactInput type="text" style={{ marginTop: '80px' }} placeholder="Họ và tên(*)" />
            <ContactInput type="email" placeholder="Địa chỉ email(*)" />
            <ContactInput type="tel" placeholder="Số điện thoại(*)" />
            <TextareaStyled id="message" name="message" placeholder="Tin nhắn" />
            <ButtonStyled>Gửi tin nhắn</ButtonStyled>
          </ContacrFormRightBox>
        </ContactFormStyles>
      </ContactStyles>
    </>
  );
};
