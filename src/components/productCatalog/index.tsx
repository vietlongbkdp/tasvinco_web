import React, { useState } from 'react';
import { Menu, MenuProps, Pagination } from 'antd';
import {
  ProductCatalog,
  ProductCatalogLeftBox,
  ProductCatalogLeftTitleBox,
  ProductCatalogRightBox,
  ProductCatalogRight,
  ProductCatalogRightContent,
  ProductCatalogRightImages,
  ProductCatalogStyles,
} from './styled';
import { PageTitlesComponent } from './feature/Page-Title';
import { items } from './constant';

interface LevelKeysProps {
  key?: string;
  children?: LevelKeysProps[];
}

const getLevelKeys = (items1: LevelKeysProps[]) => {
  const key: Record<string, number> = {};
  const func = (items2: LevelKeysProps[], level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};

const levelKeys = getLevelKeys(items as LevelKeysProps[]);

export const ProductCatalogComponent: React.FC = () => {
  const [stateOpenKeys, setStateOpenKeys] = useState(['2', '23']);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const onOpenChange: MenuProps['onOpenChange'] = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);

      setStateOpenKeys(
        openKeys
          .filter((_, index) => index !== repeatIndex)
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      setStateOpenKeys(openKeys);
    }
  };

  const products = Array(18).fill({
    src: 'https://weldcom.vn/wp-content/uploads/2024/07/trung-tam-gia-cong-dung-dnm-series-dns-1-300x300.png',
    text: 'Trung Tâm Gia Công Đứng DNM Series DN Solutions',
  });

  // Xác định các sản phẩm để hiển thị dựa trên trang hiện tại
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);

  // Hàm xử lý thay đổi trang
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <PageTitlesComponent />
      <ProductCatalog>
        <ProductCatalogStyles>
          <ProductCatalogLeftBox>
            <ProductCatalogLeftTitleBox>Danh mục sản phẩm</ProductCatalogLeftTitleBox>
            <Menu
              mode="inline"
              defaultSelectedKeys={['231']}
              openKeys={stateOpenKeys}
              onOpenChange={onOpenChange}
              style={{ width: 256 }}
              items={items}
            />
          </ProductCatalogLeftBox>
          <ProductCatalogRightBox>
            {currentProducts.map((product, index) => (
              // eslint-disable-next-line react/no-array-index-key
              <ProductCatalogRight key={index}>
                <ProductCatalogRightImages src={product.src} />
                <ProductCatalogRightContent>{product.text}</ProductCatalogRightContent>
              </ProductCatalogRight>
            ))}
          </ProductCatalogRightBox>
        </ProductCatalogStyles>
        <Pagination
          current={currentPage}
          pageSize={itemsPerPage}
          total={products.length}
          onChange={handlePageChange}
          style={{ display: 'flex', justifyContent: 'end', marginRight: '20px' }}
        />
      </ProductCatalog>
    </>
  );
};
