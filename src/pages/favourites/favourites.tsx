import CatalogList from '../../components/catalog-list/catalog-list';
import FavouritesEmpty from '../../components/favourites-empty/favourites-empty';
import FavouritesQuantity from '../../components/favourites-quantity/favourites-quantity';
import Layout from '../../components/layout/layout';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { deleteFavouriteAction } from '../../store/api-actions';
import { getFavourites } from '../../store/favourites-data/selectors';

function Favourites(): JSX.Element {
  const dispatch = useAppDispatch();

  const favourites = useAppSelector(getFavourites);

  return (
    <Layout header heading="Избранное" backLink footer>
      {favourites.length ? (
        <>
          <FavouritesQuantity favourites={favourites} />
          <section className="favourites">
            <div className="container">
              <h2 className="visually-hidden">Избранные товары</h2>
              <div className="favourites__button">
                <button
                  className="btn btn--second"
                  type="button"
                  onClick={() =>
                    favourites.forEach((product) => {
                      dispatch(deleteFavouriteAction(product.id));
                    })}
                >
                  Очистить
                </button>
              </div>
            </div>
            <CatalogList products={favourites} />
          </section>
        </>
      ) : (
        <FavouritesEmpty />
      )}
    </Layout>
  );
}

export default Favourites;
