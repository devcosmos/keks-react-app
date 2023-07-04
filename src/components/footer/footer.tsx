function Footer(): JSX.Element {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <p className="footer__feedback">
            Напишите нам:
            <a
              className="footer__feedback-email"
              href="mailto:pecarnya@academy.pro"
              target="_blank"
              rel="nofollow noopener noreferrer"
            >
              pecarnya@academy.pro
            </a>
          </p>
          <ul className="footer__list">
            <li className="footer__item">
              <a
                className="footer__social-link"
                href="https://vk.com/htmlacademy"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <span className="visually-hidden">Вконтакте</span>
                <svg width="50" height="50" aria-hidden="true">
                  <use xlinkHref="#icon-vk" />
                </svg>
              </a>
            </li>
            <li className="footer__item">
              <a
                className="footer__social-link"
                href="https://t.me/htmlacademy"
                target="_blank"
                rel="nofollow noopener noreferrer"
              >
                <span className="visually-hidden">Телеграм</span>
                <svg width="50" height="50" aria-hidden="true">
                  <use xlinkHref="#icon-telegram" />
                </svg>
              </a>
            </li>
          </ul>
          <a
            className="footer__devolopers"
            href="https://htmlacademy.ru/"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            Разработано .html Academy
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
