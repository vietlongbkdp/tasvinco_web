import { Plus } from 'assets/icon';
import styled from 'styled-components';

export const MainStyles = styled.div`
  width: 320px;
  height: 192px;
  border: 1px solid #333132;
  position: relative;
`;

export const ContentStyles = styled.div`
  font-size: 30px;
  font-weight: 800;
  color: #333132;
  text-align: center;
  line-height: 1.2;
  min-height: 108px;
  text-transform: uppercase;
  margin-top: 80px;
`;

export const StylesNumber = styled.div`
  background-color: #fff;
  padding-inline: 20px;
  color: #d72e24;
  font-size: 90px;
  font-weight: 800;
  position: absolute;
  top: -50px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
`;

export const IconStyles = styled(Plus)`
  width: 20px;
  height: 20px;
  right: 0;
  top: -2px;
  position: absolute;
  & path {
    fill: #d72e24;
    stroke: none;
  }
`;
