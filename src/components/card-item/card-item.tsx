import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';
import { Product } from '../../types/products';
import { getNumberWithSpace } from '../utils';
import classNames from 'classnames';

type CardItemProps = {
  product: Product;
  isBigCard?: boolean;
}

function CardItem({product, isBigCard}: CardItemProps): JSX.Element {
  const {id, title, price, previewImage, previewImageWebp, isNew, isFavorite} = product;

  return (
    <div className={classNames('card-item', {'card-item--big': isBigCard})}>
      <Link className="card-item__img-link" to={AppRoute.Product.replace(':id', id)}>
        <div className="card-item__img-wrapper">
          <picture>
            <source type="image/webp" src={previewImageWebp} />
            <img src={previewImage} width="326" height="332" alt={title} />
          </picture>
        </div>
        {isNew && <span className="card-item__label">Новинка</span>}
      </Link>
      <button
        className={classNames(
          'card-item__favorites',
          {'card-item__favorites--active': isFavorite}
        )}
      >
        <span className="visually-hidden">Добавить в избранное</span>
        <svg width="51" height="41" aria-hidden="true">
          <use xlinkHref="#icon-like" />
        </svg>
      </button>
      {isBigCard && <span className="card-item__price">{getNumberWithSpace(price)} p</span>}
      <Link className="card-item__link" to={AppRoute.Product.replace(':id', id)}>
        <h3 className="card-item__title">
          <span>{title}</span>
        </h3>
      </Link>
    </div>
  );
}

export default CardItem;
