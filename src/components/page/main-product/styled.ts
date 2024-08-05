import styled from 'styled-components';

export const MainProductStyle = styled.div`
  height: 450px;
  width: 420px;
  position: relative;
  z-index: 1;
`;

export const ImageBox = styled.div`
  z-index: 100;
  width: 300px;
  margin-left: 25px;
  padding: 29px;
  border: 1px solid #323131;
  background-color: white;
`;

export const ImageStyle = styled.img`
  transition: transform 0.3s ease;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
`;

export const ContentStyle = styled.div`
  width: 360px;
  height: 56px;
  background-color: #323131;
  color: white;
  text-transform: uppercase;
  font-size: 20px;
  font-weight: 700;
  line-height: 56px;
  text-align: center;
  padding-top: 70px;
  position: absolute;
  bottom: 30px;
  z-index: -1;
`;
