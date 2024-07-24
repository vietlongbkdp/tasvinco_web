import { ContentItem, IconRightArrow, Icons } from './styled';

export const MenuFooter = ({ content }) => {
  return (
    <Icons>
      <IconRightArrow />
      <ContentItem>{content}</ContentItem>
    </Icons>
  );
};
