import { FC } from 'react';
import { ContentHeaderNavBottom, HeaderVerticalMenu, StyledLink } from './styled';

export type PropsNaviHeader = {
  // eslint-disable-next-line react/no-unused-prop-types
  id: number;
  content: string;
  link: string;
};
export const NaviHeader: FC<PropsNaviHeader> = ({ content, link }) => {
  return (
    <StyledLink to={link}>
      <HeaderVerticalMenu>
        <ContentHeaderNavBottom>{content}</ContentHeaderNavBottom>
      </HeaderVerticalMenu>
    </StyledLink>
  );
};
