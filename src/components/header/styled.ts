import styled from 'styled-components';
import { Menu } from 'antd';
import { Cart, DownArrow, Email, MenuIcon, PhoneCall } from 'assets/icon';

export const TopBar = styled.div`
  background-color: #e7e7e7;
`;
export const MastHeadBox = styled.div`
  width: 100%;
  z-index: 1000;

  &.scrolled {
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    background-color: white;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

export const MastHead = styled.div`
  height: 115px;
  width: 80%;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  position: relative;
`;

export const DivTopBar = styled.div`
  width: 80%;
  margin-inline: auto;
  display: flex;
  justify-content: end;
`;

export const ContentTopBar = styled.p`
  font-style: normal;
  text-align: center;
  margin-right: 15px;
  border-right: 1px solid #b2bec3;
  padding-right: 15px;
  cursor: pointer;
  &:hover {
    color: #e74c3c;
  }
`;

export const LanguageButton = styled.div`
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const ImageStyle = styled.img`
  margin-right: 8px;
  width: 16px;
  align-items: center;
`;

export const Logo = styled.img`
  max-height: 115px;
`;

export const HeaderNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

export const HeaderContact = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const IconPhoneCall = styled(PhoneCall)`
  width: 20px;
  height: 20px;
  cursor: pointer;
  & path {
    fill: #d72e24;
    stroke: none;
  }
`;

export const IconDownArrow = styled(DownArrow)`
  width: 15px;
  height: 15px;
`;

export const IconMenu = styled(MenuIcon)`
  width: 30px;
  height: 30px;

  & path {
    fill: white;
  }
`;
export const IconEmail = styled(Email)`
  width: 20px;
  height: 20px;
  & path {
    fill: red;
  }
`;

export const IconCart = styled(Cart)`
  width: 20px;
  height: 20px;
  & path {
    fill: red;
  }
`;

export const ContentHeaderNav = styled.p`
  cursor: pointer;
`;

export const WideNav = styled.div`
  background-color: #323131;
  z-index: 1000;

  &.scrolled {
    position: fixed;
    top: 115px;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
  }
`;

export const HeaderBottom = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 34px;
  height: 55px;
  width: 80%;
  margin-inline: auto;
  margin-block: auto;
`;

export const IconDownArrowWhite = styled(DownArrow)`
  margin-left: 50px;
  width: 15px;
  height: 15px;
  & path {
    fill: white;
  }
`;

export const HeaderVerticalMenuTitle = styled.div`
  background-color: #a51d14;
  padding-left: 15px;
  padding-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 10px;
`;

export const MenuStyle = styled(Menu)`
  background-color: #d72e24 !important;
  border-radius: 0 !important;
  color: #fff !important;
  padding: 8px 0 !important;
  margin-top: -4px !important;

  .ant-dropdown-menu-item {
    background-color: #d72e24 !important;
    color: #fff !important;
  }
  .ant-dropdown-menu-submenu-expand-icon {
    & path {
      fill: white;
    }
  }

  .ant-dropdown-menu-title-content {
    color: #fff !important;
    font-size: 18px !important;
  }
`;
