import Layout from '../../components/layout/layout';
import ProductDetails from '../../components/product-details/product-details';
import ReviewFilterSort from '../../components/review-filter-sort/review-filter-sort';
import ReviewForm from '../../components/review-form/review-form';
import Reviews from '../../components/reviews/reviews';
import { getProductsErrorStatus } from '../../store/products-data/selectors';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { fetchProductAction } from '../../store/api-actions';
import { getProductsLoadingStatus, getProduct } from '../../store/products-data/selectors';
import Loader from '../../components/loader/loader';
import Error from '../error/error';

function Product(): JSX.Element {
  const dispatch = useAppDispatch();

  const productId = useParams().id;

  useEffect(() => {
    if (productId) {
      dispatch(fetchProductAction(productId));
    }
  }, [dispatch, productId]);

  const product = useAppSelector(getProduct);
  const isLoading = useAppSelector(getProductsLoadingStatus);
  const isError = useAppSelector(getProductsErrorStatus);

  if (isLoading) {
    return <Loader />;
  }

  if (isError || product === null) {
    return <Error />;
  }

  return (
    <Layout header heading="Карточка: пользователь авторизован" backLink footer>
      <>
        <ProductDetails product={product} />
        <ReviewForm />
        <ReviewFilterSort />
        <Reviews />
      </>
    </Layout>
  );
}

export default Product;
