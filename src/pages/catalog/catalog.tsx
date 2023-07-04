import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogList from '../../components/catalog-list/catalog-list';
import Layout from '../../components/layout/layout';

function Catalog(): JSX.Element {
  return (
    <Layout heading="Каталог товаров" backLink footer>
      <>
        <CatalogFilter />
        <CatalogList />
      </>
    </Layout>
  );
}

export default Catalog;
