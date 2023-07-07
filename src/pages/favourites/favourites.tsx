import CatalogList from '../../components/catalog-list/catalog-list';
import FavouritesEmpty from '../../components/favourites-empty/favourites-empty';
import FavouritesQuantity from '../../components/favourites-quantity/favourites-quantity';
import Layout from '../../components/layout/layout';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { deleteFavoriteAction } from '../../store/api-actions';
import { getFavorites } from '../../store/favorites-data/selectors';

function Favourites(): JSX.Element {
  const dispatch = useAppDispatch();

  const favorites = useAppSelector(getFavorites);

  const handleClearButton = () =>
    favorites.forEach((product) => {
      dispatch(deleteFavoriteAction(product.id));
    });

  return (
    <Layout header heading="Избранное" backLink footer>
      {favorites.length ? (
        <>
          <FavouritesQuantity favorites={favorites} />
          <section className="favourites">
            <div className="container">
              <h2 className="visually-hidden">Избранные товары</h2>
              <div className="favourites__button">
                <button
                  className="btn btn--second"
                  type="button"
                  onClick={handleClearButton}
                >
                  Очистить
                </button>
              </div>
            </div>
            <CatalogList products={favorites} />
          </section>
        </>
      ) : (
        <FavouritesEmpty />
      )}
    </Layout>
  );
}

export default Favourites;
