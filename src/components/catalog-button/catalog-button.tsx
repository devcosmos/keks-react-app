import { CATALOG_PRODUCT_DISPLAY_COUNT } from '../../consts';

type MoreButtonProps = {
  productsCount: number;
  showCount: number;
  setShowCount: (count: number) => void;
}

function CatalogButton({productsCount, showCount, setShowCount}: MoreButtonProps): JSX.Element {
  return (
    <div className="catalog__button-wrapper">
      {productsCount > showCount ? (
        <button
          className="btn btn--second"
          type="button"
          onClick={() => setShowCount(showCount + CATALOG_PRODUCT_DISPLAY_COUNT)}
        >
          Показать еще
        </button>
      ) : (
        <button
          className="btn btn--second"
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          В начало
        </button>
      )}
    </div>
  );
}

export default CatalogButton;
