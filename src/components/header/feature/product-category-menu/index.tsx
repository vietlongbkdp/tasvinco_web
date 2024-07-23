import { Menu } from 'antd';
import { IconRightArrow, IconRightArrowNext, MenuItems, Item, HeaderMain, HeaderHidden } from './styled';

export const ProductCategoryMenu = () => {
  return (
    <HeaderMain>
      <Menu mode="horizontal" style={{ marginTop: '-4px', backgroundColor: '#d72e24', borderRadius: '0px' }}>
        <MenuItems>
          <Item>
            <IconRightArrowNext />
            <Menu.Item style={{ color: 'white', fontSize: '18px' }}>XY Lanh</Menu.Item>
          </Item>
          <IconRightArrow />
        </MenuItems>
        <MenuItems>
          <Item>
            <IconRightArrowNext />
            <Menu.Item style={{ color: 'white', fontSize: '18px' }}>Nguồn thủy lực</Menu.Item>
          </Item>
          <IconRightArrow />
        </MenuItems>
        <MenuItems>
          <Item>
            <IconRightArrowNext />
            <Menu.Item style={{ color: 'white', fontSize: '18px' }}>Van thủy lực</Menu.Item>
          </Item>
          <IconRightArrow />
        </MenuItems>
        <MenuItems>
          <Item>
            <IconRightArrowNext />
            <Menu.Item style={{ color: 'white', fontSize: '18px' }}>Phụ kiện thủy lực</Menu.Item>
          </Item>
          <IconRightArrow />
        </MenuItems>
      </Menu>
      <HeaderHidden>aaaaaaaaaa</HeaderHidden>
    </HeaderMain>
  );
};
