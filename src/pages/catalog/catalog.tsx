import { useEffect, useState } from 'react';
import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogList from '../../components/catalog-list/catalog-list';
import Layout from '../../components/layout/layout';
import { useAppSelector } from '../../hooks';
import { getCategories, getProductsErrorStatus, getProductsLoadingStatus, getProducts } from '../../store/products-data/selectors';
import Error from '../error/error';
import { store } from '../../store';
import { fetchCategoriesAction } from '../../store/api-actions';
import Loader from '../../components/loader/loader';
import { getFilterCategory, getFilterTypes } from '../../store/products-process/selectors';
import { CATALOG_PRODUCT_DISPLAY_COUNT } from '../../consts';
import CatalogNotFound from '../../components/catalog-not-found/catalog-not-found';

function Catalog(): JSX.Element {
  let products = useAppSelector(getProducts);
  const isError = useAppSelector(getProductsErrorStatus);
  const isLoading = useAppSelector(getProductsLoadingStatus);
  const activeCategory = useAppSelector(getFilterCategory);
  const activeTypes = useAppSelector(getFilterTypes);
  const categories = useAppSelector(getCategories);

  const [showCount, setShowCount] = useState<number>(CATALOG_PRODUCT_DISPLAY_COUNT);

  if (activeCategory) {
    products = products.filter((product) => product.category === activeCategory);
    if (activeTypes.length) {
      products = products.filter((product) => activeTypes.includes(product.type));
    }
  }

  useEffect(() => {
    store.dispatch(fetchCategoriesAction());
  }, []);

  useEffect(() => {
    setShowCount(CATALOG_PRODUCT_DISPLAY_COUNT);
  }, [activeCategory, activeTypes]);

  if (isLoading) {
    return <Loader />;
  }

  if (isError) {
    return <Error />;
  }

  return (
    <Layout header heading="Каталог товаров" backLink footer>
      <>
        <CatalogFilter
          categories={categories}
          activeCategory={activeCategory}
          activeTypes={activeTypes}
        />
        {products.length ? (
          <CatalogList
            products={products}
            showCount={showCount}
            setShowCount={setShowCount}
          />
        ) : (
          <CatalogNotFound />
        )}
      </>
    </Layout>
  );
}

export default Catalog;
