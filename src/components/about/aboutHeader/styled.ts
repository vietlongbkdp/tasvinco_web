import { Company, Hand, Intersect, Mission, Rewind, Users } from 'assets/icon';
import styled, { css } from 'styled-components';

export const ImagesBox = styled.div`
  position: relative;
`;

export const ImagesStyles = styled.img`
  width: 100%;
  height: 350px;
`;

export const Content = styled.div`
  width: 590px;
  font-size: 38px;
  color: #fff;
  font-weight: 700;
  position: absolute;
  top: 40%;
  left: 23%;
  transform: translate(-40%, -23%);
`;

export const AboutMenu = styled.div`
  width: 100%;
  height: 156px;
  background-color: #f1f1f1;
`;

export const AboutNav = styled.div`
  width: 80%;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
`;

const createIconComponent = (IconComponent, size = 70, color = '#ababab', cursor = 'pointer') => {
  return styled(IconComponent)`
    width: 100%;
    height: ${size}px;
    cursor: ${cursor};
    text-align: center;
    & path {
      fill: ${color};
      stroke: none;
      transition: fill 0.3s ease;
    }
  `;
};

export const IconUsers = createIconComponent(Users);
export const IconCompany = createIconComponent(Company);
export const IconHand = createIconComponent(Hand);
export const IconIntersect = createIconComponent(Intersect);
export const IconMission = createIconComponent(Mission);
export const IconRewind = createIconComponent(Rewind);

interface NawItemBoxProps {
  isSelected: boolean;
}

export const NawItemBox = styled.div<NawItemBoxProps>`
  margin-top: -10px;
  margin-block: 29px;
  cursor: pointer;
  padding-bottom: 20px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 5px;
    background-color: #d72e24;
    transition: all 0.3s ease;
  }

  &:hover::after {
    left: 0;
    width: 100%;
  }

  &:hover .icon-path path {
    fill: #d72e24;
  }

  ${({ isSelected }) =>
    isSelected &&
    css`
      &::after {
        left: 0;
        width: 100%;
      }

      .icon-path path {
        fill: #d72e24;
      }
    `}
`;

export const NavImage = styled.img`
  width: 100px;
  font-size: 16px;
  color: #333132;
  display: block;
  text-align: center;
`;

export const NavContent = styled.div`
  margin-top: 10px;
  font-size: 16px;
  font-weight: 700;
  color: #333132;
  display: block;
  text-align: center;
`;
