import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogList from '../../components/catalog-list/catalog-list';
import Layout from '../../components/layout/layout';
import { useAppSelector } from '../../hooks';
import { getProducts } from '../../store/products-data/selectors';

function Catalog(): JSX.Element {
  const products = useAppSelector(getProducts);

  return (
    <Layout header heading="Каталог товаров" backLink footer>
      <>
        <CatalogFilter />
        <CatalogList products={products}/>
      </>
    </Layout>
  );
}

export default Catalog;
