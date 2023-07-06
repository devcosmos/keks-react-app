import { useState } from 'react';
import { Products } from '../../types/products';
import { CATALOG_PRODUCT_DISPLAY_COUNT } from '../../consts';
import CatalogButton from '../catalog-button/catalog-button';
import CardItem from '../card-item/card-item';

type CatalogListProps = {
  products: Products;
  showAll?: boolean;
}

function CatalogList({products, showAll = false}: CatalogListProps): JSX.Element {
  const initialCount = showAll ? products.length : CATALOG_PRODUCT_DISPLAY_COUNT;
  const [showCount, setShowCount] = useState<number>(initialCount);

  return (
    <section className="catalog">
      <div className="container">
        <h2 className="visually-hidden">Каталог</h2>
        <div className="catalog__wrapper">
          <ul className="catalog__list">
            {products.slice(0, showCount).map((product) => (
              <li key={product.id} className="catalog__item">
                <CardItem product={product} isBigCard />
              </li>
            ))}
          </ul>
          {!showAll &&
            <CatalogButton
              productsCount={products.length}
              showCount={showCount}
              setShowCount={setShowCount}
            />}
        </div>
      </div>
    </section>
  );
}

export default CatalogList;
