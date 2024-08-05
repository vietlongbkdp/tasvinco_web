import { MenuProps } from 'antd';
import { IconRightArrowNext } from './styled';

export const items: MenuProps['items'] = [
  {
    key: 'XY Lanh',
    icon: <IconRightArrowNext />,
    label: 'XY Lanh',
    children: [
      {
        key: 'XY Lanh-1',
        label: 'XY Lanh 1',
      },
      {
        key: 'XY Lanh-2',
        label: 'XY Lanh 2',
        children: [
          { key: '3', label: 'Option 3' },
          {
            key: '4',
            label: 'Option 4',
          },
        ],
      },
    ],
  },
  {
    key: '  Nguồn thủy lực',
    icon: <IconRightArrowNext />,
    label: '  Nguồn thủy lực',
  },
  {
    key: '  Van thủy lực',
    label: '  Van thủy lực',
    icon: <IconRightArrowNext />,
  },
  {
    key: ' Phụ kiện thủy lực',
    label: ' Phụ kiện thủy lực',
    icon: <IconRightArrowNext />,
    children: [
      { key: 'gioăng', label: 'Gioăng' },
      { key: 'phớt', label: 'Phớt' },
      { key: 'thăm dầu', label: 'Thăm dầu' },
      { key: 'đồng hồ áp', label: 'Đồng hồ áp' },
    ],
  },
];
