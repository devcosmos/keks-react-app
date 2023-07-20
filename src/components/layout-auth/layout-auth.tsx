import { PROJECT_NAME } from '../../consts';

type LayoutProps = {
  className: string;
  children: JSX.Element;
}

function LayoutAuth({className, children}: LayoutProps): JSX.Element {
  return (
    <div className="wrapper">
      <main>
        <section className={`${className}-page`}>
          <div className={`${className}-page__header`}>
            <div className={`${className}-page__img-wrap`}>
              <img
                className={`${className}-page__img`}
                src={`/${PROJECT_NAME}/img/svg/hero-keks.svg`}
                width="727"
                height="569"
                alt="Картинка кота."
              />
            </div>
          </div>
          <div className={`${className}-page__content`}>
            <div className={`${className}-page__inner`}>
              {children}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default LayoutAuth;
