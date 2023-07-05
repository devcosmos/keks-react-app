import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';

function CardItem(): JSX.Element {
  return (
    <div className="card-item card-item--big">
      <Link className="card-item__img-link" to={AppRoute.Product}>
        <div className="card-item__img-wrapper">
          <picture>
            <source type="image/webp" srcSet="img/content/blueberry-cake.webp, img/content/blueberry-cake@2x.webp 2x" />
            <img src="img/content/blueberry-cake.jpg" srcSet="img/content/blueberry-cake@2x.jpg 2x" width="326" height="332" alt="Торт голубика." />
          </picture>
        </div>
        <span className="card-item__label">Новинка</span>
      </Link>
      <button className="card-item__favorites card-item__favorites--active">
        <span className="visually-hidden">Добавить в избранное</span>
        <svg width="51" height="41" aria-hidden="true">
          <use xlinkHref="#icon-like" />
        </svg>
      </button>
      <span className="card-item__price">9 300 p</span>
      <Link className="card-item__link" to={AppRoute.Product}>
        <h3 className="card-item__title">
          <span>Торт Голубика</span>
        </h3>
      </Link>
    </div>
  );
}

export default CardItem;
