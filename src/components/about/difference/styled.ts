import styled from 'styled-components';

export const DifferenceStyles = styled.div`
  width: 80%;
  margin-inline: auto;
  padding-top: 80px;
`;

export const DifferenceTitles = styled.div`
  text-align: center;
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 25px;
  font-style: normal;
`;

export const DifferenceStartBox = styled.div`
  padding-block: 60px;
  display: flex;
  gap: 40px;
`;

export const DifferenceStartLeftBox = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const DifferenceStartRighttBox = styled.div`
  width: 45%;
  display: flex;
  flex-direction: column;
`;

export const DifferenceStartRightBTitle = styled.div`
  font-size: 50px;
  color: #d72e24;
  margin: 0;
  line-height: 1.2;
  text-transform: uppercase;
  font-weight: 700;
`;

export const DifferenceSartYearTitle = styled.div`
  font-size: 41px;
  color: #333132;
  text-transform: uppercase;
  font-weight: 400;
`;

export const DifferenceStartRightBorderBottom = styled.div`
  margin-block: 30px;
  height: 5px;
  width: 6px;
  min-width: 105px;
  background-color: #d72e24;
`;

export const DifferenceContent = styled.div`
  font-size: 16px;
  color: #333132;
  line-height: 25px;
  text-align: justify;
`;

export const DifferenceEndBox = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const DifferenceEndImages = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
`;

export const DifferenceEndContentBox = styled.div`
  width: 80%;
  margin-inline: auto;
  display: flex;
  gap: 40px;
`;

export const Images = styled.img`
  margin: 0 auto;
  height: 150px;
`;

export const ImagesEnd = styled.img`
  width: 450px;
  height: auto;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
`;
