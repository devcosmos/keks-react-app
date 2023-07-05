import { Link } from 'react-router-dom';
import CardItem from '../../components/card-item/card-item';
import Hero from '../../components/hero/hero';
import Layout from '../../components/layout/layout';
import Map from '../../components/map/map';
import Review from '../../components/review/review';
import { AppRoute, MAIN_PRODUCT_DISPLAY_COUNT } from '../../consts';
import { useAppSelector } from '../../hooks';

function Main(): JSX.Element {
  const products = useAppSelector((state) => state.products);

  return (
    <Layout footer>
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
        <section className="last-review">
          <div className="container">
            <h2 className="last-review__title">последний отзыв</h2>
            <Review />
          </div>
        </section>
        <Map />
      </>
    </Layout>
  );
}

export default Main;
