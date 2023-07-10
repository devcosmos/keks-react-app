import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getReviewsErrorStatus, getReviewsLoadingStatus } from '../../store/reviews-data/selectors';
import { fetchProductAction, fetchReviewsAction } from '../../store/api-actions';
import { getProductsLoadingStatus, getProduct } from '../../store/products-data/selectors';
import { getProductsErrorStatus } from '../../store/products-data/selectors';
import ProductDetails from '../../components/product-details/product-details';
import ReviewError from '../../components/review-error/review-error';
import ReviewForm from '../../components/review-form/review-form';
import ReviewList from '../../components/review-list/review-list';
import Layout from '../../components/layout/layout';
import Loader from '../../components/loader/loader';
import Error from '../error/error';

function Product(): JSX.Element {
  const dispatch = useAppDispatch();

  const productId = useParams().id;

  const product = useAppSelector(getProduct);
  const isProductsLoading = useAppSelector(getProductsLoadingStatus);
  const isProductsError = useAppSelector(getProductsErrorStatus);
  const isReviewsLoading = useAppSelector(getReviewsLoadingStatus);
  const isReviewsError = useAppSelector(getReviewsErrorStatus);

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

  let reviews: JSX.Element;

  if (isReviewsLoading) {
    reviews = <Loader />;
  } else if (isReviewsError) {
    reviews = <ReviewError onClick={() => void dispatch(fetchReviewsAction(productId))} />;
  } else {
    reviews = <ReviewList />;
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
        {reviews}
      </>
    </Layout>
  );
}

export default Product;
