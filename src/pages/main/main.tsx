import CardItem from '../../components/card-item/card-item';
import Hero from '../../components/hero/hero';
import Layout from '../../components/layout/layout';
import Map from '../../components/map/map';
import Review from '../../components/review/review';

function Main(): JSX.Element {
  return (
    <Layout footer>
      <>
        <Hero />
        <section className="random-main">
          <div className="container">
            <h2 className="random-main__title">кексы</h2>
            <ul className="random-main__list">
              <li className="random-main__item">
                <CardItem />
              </li>
              <li className="random-main__item">
                <CardItem />
              </li>
              <li className="random-main__item">
                <CardItem />
              </li>
              <li className="random-main__item">
                <a className="random-main__link" href="#">
                  <div className="random-main__icon-wrapper">
                    <div className="random-main__icon">
                      <svg width="120" height="130" aria-hidden="true">
                        <use xlinkHref="#icon-keks"></use>
                      </svg>
                    </div>
                  </div>
                  <h3 className="random-main__subtitle">Все кексы</h3>
                </a>
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
