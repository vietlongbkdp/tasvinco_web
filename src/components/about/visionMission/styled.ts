import { Creative, Follow, Grateful, Honest, Save } from 'assets/icon';
import styled from 'styled-components';

export const VisionMissionAbout = styled.div`
  width: 80%;
  margin-inline: auto;
  margin-bottom: 60px;
`;
export const TitleStyles = styled.div`
  font-size: 30px;
  font-weight: 900;
  color: #333132;
  text-align: center;
  text-transform: uppercase;
  padding-top: 80px;
  padding-bottom: 60px;
`;

export const ContentStyles = styled.div`
  font-size: 25px;
  text-align: center;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
  padding-bottom: 60px;
`;

export const PageAboutBox = styled.div`
  display: flex;
  gap: 60px;
  flex-wrap: wrap;
  margin-bottom: 60px;
`;

export const PageAboutIconBox = styled.div`
  display: flex;
  gap: 20px;
  cursor: pointer;
  &:hover .icon-fill path {
    fill: white;
  }
  &:hover .b-color {
    background-color: #d72e24;
  }
`;

export const IconBox = styled.div`
  border: 1px solid #d72e24;
  border-radius: 100%;
  height: 100px;
`;

const createIconComponent = (IconComponent, size = 60, color = '#d72e24', cursor = 'pointer') => {
  return styled(IconComponent)`
    width: ${size}px;
    height: ${size}px;
    margin: 15px;
    cursor: ${cursor};
    & path {
      fill: ${color};
    }
  `;
};

export const IconCreative = createIconComponent(Creative);
export const IconFollow = createIconComponent(Follow);
export const IconGrateful = createIconComponent(Grateful);
export const IconHonest = createIconComponent(Honest);
export const IconSave = createIconComponent(Save);

export const PageAboutContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const PageAboutTitle = styled.div`
  text-transform: uppercase;
  color: #d72e24;
  font-size: 20px;
  font-weight: 700;
  font-style: normal;
  text-transform: uppercase;
`;
export const PageAboutContent = styled.div`
  font-size: 16px;
  color: #333132;
  margin-bottom: 10px;
  text-align: justify;
  line-height: 25px;
  width: 280px;
`;

export const ImageStyles = styled.img`
  display: block;
  margin: 0 auto;
  margin-bottom: 60px;
`;

export const PageAboutEndBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const PageAboutEnd = styled.div`
  width: 482px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const ImagesEnd = styled.img``;
export const ContentEnd = styled.div`
  font-size: 18px;
  text-align: justify;
  margin-bottom: 0.1em;
  margin-top: 0.1em;
`;
