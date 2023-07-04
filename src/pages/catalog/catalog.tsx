import CatalogFilter from '../../components/catalog-filter/catalog-filter';
import CatalogItem from '../../components/catalog-item/catalog-item';
import Layout from '../../components/layout/layout';

function Catalog() {
  return (
    <Layout heading="Каталог товаров">
      <>
        <CatalogFilter />
        <section className="catalog">
          <div className="container">
            <h2 className="visually-hidden">Каталог</h2>
            <div className="catalog__wrapper">
              <ul className="catalog__list">
                <CatalogItem />
              </ul>
              <div className="catalog__button-wrapper">
                <button className="btn btn--second" type="button">Показать еще</button>
              </div>
            </div>
          </div>
        </section>
      </>
    </Layout>
  );
}

export default Catalog;
