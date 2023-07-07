import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { Products } from '../../types/products';
import { getNoun, getNumberWithSpace } from '../utils';

type FavouritesQuantityProps = {
  favourites: Products;
}

function FavouritesQuantity({favourites}: FavouritesQuantityProps): JSX.Element {
  const sum = favourites.reduce((partialSum, a) => partialSum + a.price, 0);

  return (
    <section className="number-of-favourites">
      <div className="container">
        <h2 className="visually-hidden">Количество товаров в избранном.</h2>
        <p className="number-of-favourites__cakes">
          {favourites.length}&nbsp;{getNoun(favourites.length, 'кекс', 'кекса', 'кексов')}
        </p>
        <div className="number-of-favourites__wrapper">
          <div className="number-of-favourites__wrap-price">
            <p className="number-of-favourites__text">Всего</p>
            <p className="number-of-favourites__price">{getNumberWithSpace(sum)}&nbsp;р</p>
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
