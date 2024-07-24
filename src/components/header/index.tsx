import React, { useState } from 'react';
import { Dropdown, Tooltip } from 'antd';
import { Search } from 'components/Form';
import logo from '../../assets/images/logo.png';
import english from '../../assets/images/english.png';
import vietnam from '../../assets/images/vietnam.png';
import {
  TopBar,
  DivTopBar,
  ContentTopBar,
  LanguageButton,
  MastHead,
  Logo,
  HeaderNav,
  HeaderContact,
  IconPhoneCall,
  IconDownArrow,
  IconEmail,
  IconCart,
  IconMenu,
  ContentHeaderNav,
  WideNav,
  HeaderBottom,
  HeaderVerticalMenuTitle,
  IconDownArrowWhite,
  ImageStyle,
} from './styled';
import { LanguageDropdown } from './feature/language-dropdown';
import { ProductCategoryMenu } from './feature/product-category-menu';
import { ContentHeaderNavBottom } from './feature/navi-header/styled';
import { NaviHeaderData } from './constant';
import { NaviHeader } from './feature/navi-header';

export const HeaderPage: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Tiếng việt');
  const [selectedLanguageIcon, setSelectedLanguageIcon] = useState(vietnam);

  const handleLanguageChange = (key: string) => {
    setSelectedLanguage(key);
    setSelectedLanguageIcon(key === 'Tiếng việt' ? vietnam : english);
  };

  return (
    <>
      <TopBar>
        <DivTopBar>
          <ContentTopBar>Bảo hành Online</ContentTopBar>
          <ContentTopBar>Liên hệ</ContentTopBar>
          <Dropdown
            overlay={<LanguageDropdown selectedLanguage={selectedLanguage} onLanguageChange={handleLanguageChange} />}
          >
            <LanguageButton>
              <ImageStyle src={selectedLanguageIcon} alt={selectedLanguage} />
              {selectedLanguage}
              <IconDownArrow />
            </LanguageButton>
          </Dropdown>
        </DivTopBar>
      </TopBar>
      <MastHead>
        <Logo src={logo} alt="Logo" />
        <HeaderNav>
          <HeaderContact>
            <IconPhoneCall />
            <Tooltip title="0369.986.170 - 0987.700.421">
              <ContentHeaderNav>0369.986.170 - 0987.700.421</ContentHeaderNav>
            </Tooltip>
          </HeaderContact>
          <HeaderContact>
            <IconEmail />
            <Tooltip title="infor@tasvinco.com">
              <ContentHeaderNav>infor@tasvinco.com</ContentHeaderNav>
            </Tooltip>
          </HeaderContact>
          <HeaderContact>
            <Search onSearch={(searchTerm) => console.log(searchTerm)} />
          </HeaderContact>
          <HeaderContact>
            <ContentHeaderNav>Giỏ hàng / 0 ₫</ContentHeaderNav>
            <IconCart />
          </HeaderContact>
        </HeaderNav>
      </MastHead>
      <WideNav>
        <HeaderBottom>
          <Dropdown overlay={<ProductCategoryMenu />} placement="bottomLeft">
            <HeaderVerticalMenuTitle>
              <IconMenu />
              <ContentHeaderNavBottom>DANH MỤC SẢN PHẨM</ContentHeaderNavBottom>
              <IconDownArrowWhite />
            </HeaderVerticalMenuTitle>
          </Dropdown>
          {NaviHeaderData.length &&
            NaviHeaderData.map((data) => <NaviHeader content={data.content} key={data.id} id={0} />)}
        </HeaderBottom>
      </WideNav>
    </>
  );
};
