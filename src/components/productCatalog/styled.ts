import styled from 'styled-components';

export const ProductCatalog = styled.div`
  width: 80%;
  margin-inline: auto;
  padding-bottom: 40px;
`;

export const ProductCatalogStyles = styled.div`
  display: flex;
  gap: 40px;
`;

export const ProductCatalogLeftBox = styled.div``;
export const ProductCatalogLeftTitleBox = styled.div`
  text-align: center;
  color: white;
  background-color: #d72e24;
  font-size: 16px;
  padding: 20px 30px;
  font-weight: 500;
  text-transform: uppercase;
`;
export const ProductCatalogRightBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;

export const ProductCatalogRightImages = styled.img`
  transition: transform 0.3s ease;
`;

export const ProductCatalogRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 25%;
  height: 400px;
  cursor: pointer;

  &:hover ${ProductCatalogRightImages} {
    transform: scale(1.1);
  }
`;

export const ProductCatalogRightContent = styled.div`
  font-size: 16px;
  font-weight: 500;
  color: #000;
  text-align: center;
`;
