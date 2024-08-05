import styled from 'styled-components';

export const MainStyles = styled.div`
  width: 380px;
  height: auto;
  overflow: hidden;
`;

export const ImagesBox = styled.div`
  width: 100%;
  overflow: hidden;
`;
export const ImagesStyle = styled.img`
  width: 100%;
  height: 250px;
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;
export const ContentTitle = styled.div`
  margin-top: 20px;
  min-height: 60px;
  font-size: 16px;
  font-weight: 700;
  color: #000;
  text-transform: uppercase;
  margin-bottom: 15px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
`;
export const ContentText = styled.div`
  font-size: 16px;
  color: #000;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  -o-text-overflow: ellipsis;
  text-overflow: ellipsis;
  text-align: justify;
  line-height: 1.2;
`;
