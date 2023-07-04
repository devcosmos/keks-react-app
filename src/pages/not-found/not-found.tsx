import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';
import Layout from '../../components/layout/layout';

function NotFound(): JSX.Element {
  return (
    <Layout heading="404">
      <section className="error-page">
        <div className="container">
          <h2 className="error-page__title">404</h2>
          <p className="error-page__message">Страница не найдена</p>
          <p className="error-page__text">Она была удалена<br />или<br />вы&nbsp;указали неправильный адрес.</p>
          <div className="error-page__button">
            <Link className="btn btn--large" to={AppRoute.Main}>Вернуться&nbsp;на&nbsp;главную</Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default NotFound;
