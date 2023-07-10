import { Link } from 'react-router-dom';
import CardItem from '../../components/card-item/card-item';
import Hero from '../../components/hero/hero';
import Layout from '../../components/layout/layout';
import Map from '../../components/map/map';
import { AppRoute, MAIN_PRODUCT_DISPLAY_COUNT } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { getProducts, getProductsLoadingStatus } from '../../store/products-data/selectors';
import ReviewItem from '../../components/review-item/review-item';
import { getLastReview, getReviewsLoadingStatus } from '../../store/reviews-data/selectors';
import { useEffect } from 'react';
import { fetchLastReviewAction } from '../../store/api-actions';
import ReviewError from '../../components/review-error/review-error';
import Loader from '../../components/loader/loader';

function Main(): JSX.Element {
  const dispatch = useAppDispatch();

  const products = useAppSelector(getProducts);
  const review = useAppSelector(getLastReview);
  const isProductsLoading = useAppSelector(getProductsLoadingStatus);
  const isReviewsLoading = useAppSelector(getReviewsLoadingStatus);

  useEffect(() => {
    dispatch(fetchLastReviewAction());
  }, [dispatch]);

  if (isProductsLoading || isReviewsLoading) {
    return <Loader />;
  }

  return (
    <Layout header footer>
      <>
        <Hero />
        <section className="random-main">
          <div className="container">
            <h2 className="random-main__title">кексы</h2>
            <ul className="random-main__list">
              {products.slice(0, MAIN_PRODUCT_DISPLAY_COUNT).map((product) => (
                <li key={product.id} className="random-main__item">
                  <CardItem product={product} />
                </li>
              ))}
              <li className="random-main__item">
                <Link className="random-main__link" to={AppRoute.Catalog}>
                  <div className="random-main__icon-wrapper">
                    <div className="random-main__icon">
                      <svg width="120" height="130" aria-hidden="true">
                        <use xlinkHref="#icon-keks" />
                      </svg>
                    </div>
                  </div>
                  <h3 className="random-main__subtitle">Все кексы</h3>
                </Link>
              </li>
            </ul>
          </div>
        </section>
        {review ? (
          <section className="last-review">
            <div className="container">
              <h2 className="last-review__title">последний отзыв</h2>
              <ReviewItem review={review} withBorder />
            </div>
          </section>
        ) : (
          <ReviewError onClick={() => void dispatch(fetchLastReviewAction())} />
        )}
        <Map />
      </>
    </Layout>
  );
}

export default Main;
