import BackLink from '../back-link/back-link';
import Footer from '../footer/footer';
import Header from '../header/header';

type LayoutProps = {
  children: JSX.Element;
  header?: boolean;
  heading?: string;
  backLink?: boolean;
  footer?: boolean;
}

function Layout({children, header, heading, backLink, footer}: LayoutProps): JSX.Element {
  return (
    <div className="wrapper">
      {header && <Header />}
      <main>
        {heading && <h1 className="visually-hidden">{heading}</h1>}
        {backLink && <BackLink />}
        {children}
      </main>
      {footer && <Footer />}
    </div>
  );
}

export default Layout;
