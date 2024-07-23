import React from 'react';
import { Menu } from 'antd';
import english from '../../../../assets/images/english.png';
import vietnam from '../../../../assets/images/vietnam.png';
import { Items, Image } from './styled';

interface LanguageDropdownProps {
  selectedLanguage: string;
  onLanguageChange: (key: string) => void;
}

export const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ selectedLanguage, onLanguageChange }) => {
  const menu = (
    <Menu onClick={(e) => onLanguageChange(e.key)} selectedKeys={[selectedLanguage]}>
      <Menu.Item key="Tiếng việt">
        <Items>
          <Image src={vietnam} alt="Vietnamese" />
          Tiếng việt
        </Items>
      </Menu.Item>
      <Menu.Item key="English">
        <Items>
          <Image src={english} alt="English" />
          English
        </Items>
      </Menu.Item>
    </Menu>
  );

  return menu;
};
