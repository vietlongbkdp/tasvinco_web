import { FC } from 'react';
import { ContentHeaderNavBottom, HeaderVerticalMenu } from './styled';

export type PropsNaviHeader = {
  // eslint-disable-next-line react/no-unused-prop-types
  id: number;
  content: string;
};
export const NaviHeader: FC<PropsNaviHeader> = ({ content }) => {
  return (
    <HeaderVerticalMenu>
      <ContentHeaderNavBottom>{content}</ContentHeaderNavBottom>
    </HeaderVerticalMenu>
  );
};
