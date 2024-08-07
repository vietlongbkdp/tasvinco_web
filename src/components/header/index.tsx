import React, { useState, useEffect } from 'react';
import { Dropdown, Tooltip } from 'antd';
import { Search } from 'components/Form';
import { LOGO, VietnamImage, EnglishImage } from 'assets';
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
  MenuStyle,
  MastHeadBox,
} from './styled';
import { LanguageDropdown } from './feature/language-dropdown';
import { ContentHeaderNavBottom } from './feature/navi-header/styled';
import { NaviHeaderData } from './constant';
import { NaviHeader } from './feature/navi-header';
import { items } from './feature/product-category-menu';

export const HeaderPage: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('Tiếng việt');
  const [selectedLanguageIcon, setSelectedLanguageIcon] = useState(VietnamImage);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleLanguageChange = (key: string) => {
    setSelectedLanguage(key);
    setSelectedLanguageIcon(key === 'Tiếng việt' ? VietnamImage : EnglishImage);
  };

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div style={{ overflowY: 'auto' }}>
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
      <MastHeadBox className={isScrolled ? 'scrolled' : ''}>
        <MastHead>
          <Logo src={LOGO} alt="Logo" />
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
      </MastHeadBox>
      <WideNav className={isScrolled ? 'scrolled' : ''}>
        <HeaderBottom>
          <Dropdown overlay={<MenuStyle items={items} />} placement="bottomLeft">
            <HeaderVerticalMenuTitle>
              <IconMenu />
              <ContentHeaderNavBottom>DANH MỤC SẢN PHẨM</ContentHeaderNavBottom>
              <IconDownArrowWhite />
            </HeaderVerticalMenuTitle>
          </Dropdown>
          {NaviHeaderData.length &&
            NaviHeaderData.map((data) => <NaviHeader content={data.content} link={data.link} key={data.id} id={0} />)}
        </HeaderBottom>
      </WideNav>
    </div>
  );
};
