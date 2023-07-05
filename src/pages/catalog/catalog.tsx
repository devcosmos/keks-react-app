import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogList from '../../components/catalog-list/catalog-list';
import Layout from '../../components/layout/layout';
import { useAppSelector } from '../../hooks';

function Catalog(): JSX.Element {
  const products = useAppSelector((state) => state.products);

  return (
    <Layout heading="Каталог товаров" backLink footer>
      <>
        <CatalogFilter />
        <CatalogList products={products}/>
      </>
    </Layout>
  );
}

export default Catalog;
