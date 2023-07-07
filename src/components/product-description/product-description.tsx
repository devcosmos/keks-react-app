import { useState } from 'react';
import { PRODUCT_DESC_COUNT } from '../../consts';

type ProductDescriptionProps = {
  description: string;
}
function ProductDescription({description}: ProductDescriptionProps): JSX.Element {
  const [showDesc, setShowDesc] = useState(description.length < PRODUCT_DESC_COUNT);

  return (
    <div className="item-details__text-wrapper">
      <span className="item-details__text">
        {showDesc ? description : description.substring(0, PRODUCT_DESC_COUNT)}
      </span>
      {!showDesc && (
        <button className="item-details__more" onClick={() => setShowDesc(true)}>
          <span className="visually-hidden">Читать полностью</span>
          <svg width="27" height="17" aria-hidden="true">
            <use xlinkHref="#icon-more" />
          </svg>
        </button>
      )}
    </div>
  );
}

export default ProductDescription;
