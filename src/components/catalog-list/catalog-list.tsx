import CatalogItem from '../catalog-item/catalog-item';

function CatalogList(): JSX.Element {
  return (
    <section className="catalog">
      <div className="container">
        <h2 className="visually-hidden">Каталог</h2>
        <div className="catalog__wrapper">
          <ul className="catalog__list">
            <CatalogItem />
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
