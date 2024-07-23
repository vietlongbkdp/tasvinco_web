import { RightArrow, RightArrowNext } from 'assets/icon';
import styled from 'styled-components';

export const IconRightArrow = styled(RightArrow)`
  width: 10px;
  height: 10px;
  margin-left: 130px;
  cursor: pointer;
  & path {
    fill: white;
  }
`;

export const IconRightArrowNext = styled(RightArrowNext)`
  width: 10px;
  height: 10px;
  cursor: pointer;
  & path {
    fill: white;
  }
`;
export const HeaderVerticalMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
`;

export const HeaderMain = styled.div`
  display: flex;
  position: relative;
`;

export const HeaderHidden = styled.div`
  display: none;
`;

export const MenuItems = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:hover ${HeaderHidden} {
    display: flex;
  }
`;
