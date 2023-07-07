import { Products } from '../../types/products';
import { CATALOG_PRODUCT_DISPLAY_COUNT } from '../../consts';
import CatalogButton from '../catalog-button/catalog-button';
import CardItem from '../card-item/card-item';

type CatalogListProps = {
  products: Products;
  showCount?: number;
  setShowCount?: (count: number) => void;
}

function CatalogList({products, showCount = products.length, setShowCount}: CatalogListProps): JSX.Element {
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
          {setShowCount && products.length > CATALOG_PRODUCT_DISPLAY_COUNT &&
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
