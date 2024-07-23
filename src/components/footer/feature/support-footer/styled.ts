import { RightArrow } from 'assets/icon';
import styled from 'styled-components';

const createIconComponent = (IconComponent, size = 20, color = 'white', cursor = 'pointer', m = -20) => {
  return styled(IconComponent)`
    width: ${size}px;
    height: ${size}px;
    cursor: ${cursor};
    margin-bottom: ${m}px;
    & path {
      fill: ${color};
    }
  `;
};

export const IconRightArrow = createIconComponent(RightArrow, 10, '#d72e24');

export const ContentItem = styled.p`
  margin-bottom: -5px;
  cursor: pointer;
  &:hover {
    color: #d72e24;
  }
`;

export const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
