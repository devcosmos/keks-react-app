import { CATALOG_PRODUCT_DISPLAY_COUNT } from '../../consts';

type MoreButtonProps = {
  productsCount: number;
  showCount: number;
  setShowCount: (count: number) => void;
}

function CatalogButton({productsCount, showCount, setShowCount}: MoreButtonProps): JSX.Element {
  return (
    <div className="catalog__button-wrapper">
      <button
        className="btn btn--second"
        type="button"
        onClick={() =>
          productsCount > showCount
            ? setShowCount(showCount + CATALOG_PRODUCT_DISPLAY_COUNT)
            : window.scrollTo({top: 0, behavior: 'smooth'})}
      >
        {productsCount > showCount ? 'Показать еще' : 'В начало'}
      </button>
    </div>
  );
}

export default CatalogButton;
