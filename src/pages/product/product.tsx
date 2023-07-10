import Layout from '../../components/layout/layout';
import ProductDetails from '../../components/product-details/product-details';
import ReviewForm from '../../components/review-form/review-form';
import ReviewList from '../../components/review-list/review-list';
import { getProductsErrorStatus } from '../../store/products-data/selectors';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import { fetchProductAction, fetchReviewsAction } from '../../store/api-actions';
import { getProductsLoadingStatus, getProduct } from '../../store/products-data/selectors';
import { getReviews, getReviewsErrorStatus, getReviewsLoadingStatus } from '../../store/reviews-data/selectors';
import Loader from '../../components/loader/loader';
import Error from '../error/error';
import { REVIEW_DISPLAY_COUNT } from '../../consts';
import ReviewError from '../../components/review-error/review-error';
import ReviewEmpty from '../../components/review-empty/review-empty';

function Product(): JSX.Element {
  const dispatch = useAppDispatch();

  const productId = useParams().id;

  const product = useAppSelector(getProduct);
  const reviews = useAppSelector(getReviews);
  const isProductsLoading = useAppSelector(getProductsLoadingStatus);
  const isReviewsLoading = useAppSelector(getReviewsLoadingStatus);
  const isProductsError = useAppSelector(getProductsErrorStatus);
  const isReviewsError = useAppSelector(getReviewsErrorStatus);

  const [showCount, setShowCount] = useState<number>(REVIEW_DISPLAY_COUNT);
  const [showReviewForm, setShowReviewForm] = useState<boolean>(false);

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductAction(productId));
      dispatch(fetchReviewsAction(productId));
    }
  }, [dispatch, productId]);

  if (productId === undefined || product === null || isProductsError) {
    return <Error />;
  }

  let review: JSX.Element;

  if (isReviewsLoading) {
    review = <Loader />;
  } else if (isReviewsError) {
    review = <ReviewError onClick={() => void dispatch(fetchReviewsAction(productId))} />;
  } else if (!reviews.length) {
    review = <ReviewEmpty />;
  } else {
    review = (
      <ReviewList
        reviews={reviews}
        showCount={showCount}
        setShowCount={setShowCount}
      />
    );
  }

  return (
    <Layout header heading="Карточка: пользователь авторизован" backLink footer>
      <>
        {isProductsLoading ? (
          <Loader />
        ) : (
          <ProductDetails
            product={product}
            showReviewForm={showReviewForm}
            setShowReviewForm={setShowReviewForm}
          />
        )}
        {showReviewForm && <ReviewForm productId={productId}/>}
        {review}
      </>
    </Layout>
  );
}

export default Product;
