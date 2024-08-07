import styled from 'styled-components';

export const PageAboutStyles = styled.div`
  height: 85%;
  overflow: hidden;
  position: relative;
`;

export const ImageStyles = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 1;
`;

export const TitleStyles = styled.div`
  padding-top: 80px;
  padding-bottom: 60px;
  font-size: 30px;
  font-weight: 900;
  color: #333132;
  text-transform: uppercase;
  z-index: 10;
  text-align: center;
  position: relative;
`;

export const PageAboutbox = styled.div`
  width: 80%;
  margin-inline: auto;
  display: flex;
  justify-content: space-between;
  z-index: 10;
  position: relative;
`;

export const ContentBox = styled.div`
  width: 40%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const TitleContent = styled.div`
  font-size: 40px;
  color: #d72e24;
  font-weight: 700;
  font-style: normal;
`;
export const ContentStyles = styled.div`
  font-size: 18px;
  line-height: 25px;
  text-align: justify;
  font-weight: 400;
  font-style: normal;
`;

export const ImageContentStyles = styled.img`
  width: 465px;
  height: 498px;
`;
