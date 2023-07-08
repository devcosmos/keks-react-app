import { ProductFullInfo } from '../../types/products';
import { getNumberWithSpace } from '../utils';
import StarRating from '../star-rating/star-rating';
import ProductDescription from '../product-description/product-description';
import LikeButton from '../like-button/like-button';

type ProductDetailsProps = {
  product: ProductFullInfo;
}

function ProductDetails({product}: ProductDetailsProps): JSX.Element {
  const {id, title, price, previewImage, previewImageWebp, isNew, weight, description, rating, reviewCount} = product;

  return (
    <section className="item-details item-details--form-open">
      <div className="container">
        <div className="item-details__wrapper">
          <div className="item-details__top-wrapper">
            <h2 className="item-details__name">{title}</h2>
            <span className="item-details__price">{getNumberWithSpace(price)} p</span>
          </div>
          <div className="item-details__weight-wrapper">
            <span className="item-details__weight">{getNumberWithSpace(weight)} грамм</span>
          </div>
          <div className="item-details__bottom-wrapper">
            <div className="item-details__image-wrapper">
              <picture>
                <source type="image/webp" src={previewImageWebp} />
                <img src={previewImage} width="241" height="245" alt={title} />
              </picture>
              {isNew && <span className="item-details__label">Новинка</span>}
            </div>
            <div className="item-details__review-wrapper">
              <StarRating rating={rating} reviewCount={reviewCount} isBig />
              <ProductDescription description={description} />
              <div className="item-details__button-wrapper">
                <LikeButton id={id} className="item-details__like-button" />
                <button className="btn btn--second" type="button">Отменить отзыв</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductDetails;
