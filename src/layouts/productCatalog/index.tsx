import { FooterPage, HeaderPage } from 'components';
import { ProductCatalogComponent } from 'components/productCatalog';

export const ProductCatalogLayout: React.FC = () => {
  return (
    <>
      <HeaderPage />
      <ProductCatalogComponent />
      <FooterPage />
    </>
  );
};
