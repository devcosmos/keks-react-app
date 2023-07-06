import { useEffect } from 'react';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogList from '../../components/catalog-list/catalog-list';
import Layout from '../../components/layout/layout';
import { useAppSelector } from '../../hooks';
import { getErrorStatus, getLoadingStatus, getProducts } from '../../store/products-data/selectors';
import Error from '../error/error';
import { store } from '../../store';
import { fetchCategoriesAction } from '../../store/api-actions';
import Loader from '../../components/loader/loader';

function Catalog(): JSX.Element {
  const products = useAppSelector(getProducts);
  const isError = useAppSelector(getErrorStatus);
  const isLoading = useAppSelector(getLoadingStatus);

  useEffect(() => {
    store.dispatch(fetchCategoriesAction());
  }, []);

  if (isLoading) {
    return <Loader />;
  }

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
