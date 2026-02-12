import { Address, Email, PhoneCalls, PhoneWhite } from 'assets/icon';
import styled from 'styled-components';

export const ContactStyles = styled.div`
  width: 80%;
  margin-inline: auto;
  padding-top: 80px;
`;

export const ImagesStyles = styled.img`
  width: 100%;
  height: 337px;
  position: absolute;
`;

export const ImagesContainer = styled.div`
  position: relative;
  width: 100%;
  height: 337px;
  margin-bottom: 40px;
`;

export const TitleStyles = styled.div`
  font-size: 38px;
  color: #fff;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  position: relative;
  padding-top: 100px;
  padding-left: 180px;
`;

export const ContactTitleStyles = styled.div`
  font-size: 30px;
  font-weight: 900;
  color: #333132;
  text-align: center;
  text-transform: uppercase;
`;

export const ContactFormStyles = styled.div`
  margin-top: 40px;
  display: flex;
`;

export const ContacrFormLeftBox = styled.div`
  width: 40%;
  background-color: #c9111a;
  color: #fff;
  padding-inline: 40px;
`;

export const LogoStyles = styled.img`
  padding-top: 60px;
  width: 20%;
`;

export const TitleLeft = styled.div`
  font-size: 19px;
  margin-block: 30px;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
`;

export const ContentBoxStyles = styled.div`
  display: flex;
  gap: 10px;
  padding-bottom: 30px;
`;

export const Content = styled.div`
  font-weight: 400;
  font-style: normal;
`;

export const ContacrFormRightBox = styled.div`
  width: 60%;
  margin-inline: auto;
  background-color: #e7e7e7;
  padding-inline: 40px;
`;

const createIconComponent = (IconComponent, size = 20, color = 'white', cursor = 'pointer') => {
  return styled(IconComponent)`
    width: ${size}px;
    height: ${size}px;
    cursor: ${cursor};
    & path {
      fill: ${color};
    }
  `;
};

export const IconPhoneCall = createIconComponent(PhoneWhite);
export const IconEmail = createIconComponent(Email);
export const IconAddress = createIconComponent(Address, 30);
export const IconPhoneCalls = createIconComponent(PhoneCalls, 20, '#c9111a');

export const PhoneCallBox = styled.div`
  background-color: #fff;
  height: 50px;
  width: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #c9111a;
  gap: 20px;
  margin-bottom: 60px;
`;

export const ContactInput = styled.input`
  height: 40px;
  width: 100%;
  border: none;
  outline: none;
  margin-bottom: 30px;
`;

export const TextareaStyled = styled.textarea`
  resize: vertical;
  width: 100%;
  font-size: 16px;
  border: none;
  outline: none;
`;

export const ButtonStyled = styled.button`
  background-color: #c9111a;
  color: #fff;
  border: none;
  outline: none;
  width: 200px;
  height: 40px;
  font-size: 16px;
  margin-top: 30px;
  margin-bottom: 80px;
`;
