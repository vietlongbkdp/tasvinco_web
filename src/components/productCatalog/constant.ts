import { MenuProps } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

export const items: MenuItem[] = [
  {
    key: '1',
    label: 'Máy hàn',
    children: [
      { key: '1', label: 'Máy hàn Laser' },
      { key: '2', label: 'Máy hàn que' },
      { key: '3', label: 'Máy hàn TIG' },
      { key: '4', label: 'Máy hàn MIG/MAG' },
    ],
  },
  {
    key: '2',
    label: 'Máy cắt',
    children: [
      { key: '21', label: 'Máy cắt ống CNC' },
      { key: '22', label: 'Máy cắt Laser CNC' },
      { key: '23', label: 'Máy cắt CNC plasma' },
    ],
  },
  {
    key: '3',
    label: 'Dây chuyển kết cấu thép',
    children: [
      { key: '31', label: 'Máy cắt thép hình' },
      { key: '32', label: 'Máy đính giá' },
      { key: '33', label: 'Máy hàn đầm' },
      { key: '34', label: 'Máy nắn thẳng dầm H' },
    ],
  },
  {
    key: '4',
    label: 'Máy giá công tấm',
    children: [
      { key: '41', label: 'Máy gấp' },
      { key: '42', label: 'Máy chắn' },
      { key: '43', label: 'Máy đột' },
      { key: '44', label: 'Máy xén' },
    ],
  },
  {
    key: '5',
    label: 'Máy gia công chính xác',
    children: [
      { key: '51', label: 'Máy phay' },
      { key: '52', label: 'Máy tiện' },
      { key: '53', label: 'Máy khoan' },
      { key: '54', label: 'Máy cắt dây' },
    ],
  },
];
