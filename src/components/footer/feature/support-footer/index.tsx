import { ContentItem, IconRightArrow, Icons } from './styled';

export const SupportFooter = ({ content }) => {
  return (
    <Icons>
      <IconRightArrow />
      <ContentItem>{content}</ContentItem>
    </Icons>
  );
};
