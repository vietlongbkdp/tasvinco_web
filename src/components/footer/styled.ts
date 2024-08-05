import styled from 'styled-components';
import { Email, PhoneWhite, Address, Facebook, Twitter, Insta, Web, Youtobe, RightArrow, Send } from 'assets/icon';

export const Footer = styled.div`
  background-color: #333132;
  color: white;
`;
export const FooterWidgets = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-inline: auto;
  padding-top: 51px;
  padding-bottom: 51px;
`;

export const FooterColums = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 450px;
  flex-direction: column;
`;

export const Logo = styled.img`
  max-height: 115px;
  width: 180px;
  margin-bottom: 20px;
`;

export const ContentTitle = styled.p`
  text-transform: uppercase;
  font-size: 20px;
  font-weight: bold;
`;
export const Content = styled.p`
  margin-bottom: -5px;
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const createIconComponent = (IconComponent, size = 20, color = 'white', cursor = 'pointer', m = -20) => {
  return styled(IconComponent)`
    width: ${size}px;
    height: ${size}px;
    cursor: ${cursor};
    margin-bottom: ${m}px;
    & path {
      fill: ${color};
    }
  `;
};

export const IconPhoneCall = createIconComponent(PhoneWhite);
export const IconEmail = createIconComponent(Email);
export const IconAddress = createIconComponent(Address, 30);
export const IconFacebook = createIconComponent(Facebook, 15);
export const IconTwitter = createIconComponent(Twitter);
export const IconInsta = createIconComponent(Insta);
export const IconWeb = createIconComponent(Web);
export const IconYoutobe = createIconComponent(Youtobe);
export const IconRightArrow = createIconComponent(RightArrow, 10, '#d72e24');

export const ContentItem = styled.p`
  margin-bottom: -5px;
  cursor: pointer;
  &:hover {
    color: #d72e24;
  }
`;

export const WidgetTitle = styled.div`
  margin-bottom: -5px;
  padding-top: 70px;
`;

export const Search = styled.div`
  position: relative;
  margin-top: 20px;
  display: flex;
  align-items: center;
  border: 1px solid #d72e24;
  border-radius: 5px;
  width: 140px;
  height: 40px;
  padding: 0 10px 0px 40px;
`;

export const IconEmailSearch = styled(Email)`
  position: absolute;
  width: 20px;
  height: 20px;
  left: 10px;
  & path {
    fill: white;
  }
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  width: 100px;
  color: white;
  background-color: transparent;
  &::placeholder {
    color: #aaa;
  }
`;

export const Button = styled.button`
  background-color: #d72e24;
  height: 40px;

  border: none;
  border-radius: 5px;
`;

export const SendEmail = styled(Send)`
  width: 35px;
  height: 20px;

  & path {
    fill: white;
  }
`;

export const FooterBorderBoottom = styled.div`
  border-top: 1px solid #414141;
`;

export const ContentFooterEnd = styled.div`
  padding-block: 20px;
  text-align: center;
  color: #414141;
  font-size: 12px;
`;
