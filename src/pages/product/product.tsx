import Layout from '../../components/layout/layout';
import ProductDetails from '../../components/product-details/product-details';
import ReviewFilterSort from '../../components/review-filter-sort/review-filter-sort';
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

  if (isProductsLoading || isReviewsLoading) {
    return <Loader />;
  }

  if (productId === undefined || product === null || isProductsError || isReviewsError) {
    return <Error />;
  }

  return (
    <Layout header heading="Карточка: пользователь авторизован" backLink footer>
      <>
        <ProductDetails
          product={product}
          showReviewForm={showReviewForm}
          setShowReviewForm={setShowReviewForm}
        />
        {showReviewForm &&
          <ReviewForm productId={productId}/>}
        <ReviewFilterSort />
        <ReviewList
          reviews={reviews}
          showCount={showCount}
          setShowCount={setShowCount}
        />
      </>
    </Layout>
  );
}

export default Product;
