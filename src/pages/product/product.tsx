import Layout from '../../components/layout/layout';
import ProductDetails from '../../components/product-details/product-details';
import ReviewFilterSort from '../../components/review-filter-sort/review-filter-sort';
import ReviewForm from '../../components/review-form/review-form';
import Reviews from '../../components/reviews/reviews';

function Product(): JSX.Element {
  return (
    <Layout heading="Карточка: пользователь авторизован" backLink footer>
      <>
        <ProductDetails />
        <ReviewForm />
        <ReviewFilterSort />
        <Reviews />
      </>
    </Layout>
  );
}

export default Product;
