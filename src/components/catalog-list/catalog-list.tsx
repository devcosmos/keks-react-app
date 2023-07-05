import { Products } from '../../types/products';
import CardItem from '../card-item/card-item';

type CatalogListProps = {
  products: Products;
}

function CatalogList({products}: CatalogListProps): JSX.Element {
  return (
    <section className="catalog">
      <div className="container">
        <h2 className="visually-hidden">Каталог</h2>
        <div className="catalog__wrapper">
          <ul className="catalog__list">
            {products.map((product) => (
              <li key={product.id} className="catalog__item">
                <CardItem product={product} isBigCard/>
              </li>
            ))}
          </ul>
          <div className="catalog__button-wrapper">
            <button className="btn btn--second" type="button">Показать еще</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CatalogList;
