import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogList from '../../components/catalog-list/catalog-list';
import Layout from '../../components/layout/layout';
import { useAppSelector } from '../../hooks';
import { getErrorStatus, getProducts } from '../../store/products-data/selectors';
import Error from '../error/error';

function Catalog(): JSX.Element {
  const products = useAppSelector(getProducts);
  const isError = useAppSelector(getErrorStatus);

  if (isError) {
    return <Error />;
  }

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
