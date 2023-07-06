// import CatalogList from '../../components/catalog-list/catalog-list';
import FavouritesQuantity from '../../components/favourites-quantity/favourites-quantity';
import Layout from '../../components/layout/layout';

function Favourites(): JSX.Element {
  return (
    <Layout header heading="Избранное" backLink footer>
      <>
        <FavouritesQuantity />
        <section className="favourites">
          <div className="container">
            <h2 className="visually-hidden">Избранные товары</h2>
            <div className="favourites__button">
              <button className="btn btn--second" type="button">Очистить</button>
            </div>
          </div>
          {/* <CatalogList /> */}
        </section>
      </>
    </Layout>
  );
}

export default Favourites;
