import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const HeaderVerticalMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;
export const ContentHeaderNavBottom = styled.p`
  cursor: pointer;
  color: white;
  text-transform: uppercase;
  &:hover {
    color: #e74c3c;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
`;
