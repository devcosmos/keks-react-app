import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

function FavouritesQuantity(): JSX.Element {
  return (
    <section className="number-of-favourites favorites-page__qty">
      <div className="container">
        <h2 className="visually-hidden">Количество товаров в избранном.</h2>
        <p className="number-of-favourites__cakes">2 кекса</p>
        <div className="number-of-favourites__wrapper">
          <div className="number-of-favourites__wrap-price">
            <p className="number-of-favourites__text">Всего</p>
            <p className="number-of-favourites__price">13&nbsp;400&nbsp;р</p>
          </div>
        </div>
        <div className="number-of-favourites__button">
          <Link to={AppRoute.Catalog} className="btn">В каталог</Link>
        </div>
      </div>
    </section>
  );
}

export default FavouritesQuantity;
