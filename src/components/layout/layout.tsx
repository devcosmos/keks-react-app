import { Link } from 'react-router-dom';
import { AppRoute } from '../../consts';
import Footer from '../footer/footer';
import Header from '../header/header';

type LayoutProps = {
  children: JSX.Element;
  heading: string;
}

function Layout({children, heading}: LayoutProps) {
  return (
    <div className="wrapper">
      <Header />
      <main>
        <h1 className="visually-hidden">{heading}</h1>
        <div className="back-link">
          <div className="container">
            <Link className="back-link__link" to={AppRoute.Main}>
              Назад
              <svg className="back-link__icon" width="30" height="16" aria-hidden="true">
                <use xlinkHref="#icon-arrow-left" />
              </svg>
            </Link>
          </div>
        </div>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
