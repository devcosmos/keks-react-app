import Layout from '../../components/layout/layout';
import { PROJECT_NAME } from '../../consts';

function Error(): JSX.Element {
  return (
    <Layout header heading="Ошибка загрузки страницы" footer>
      <section className="error-loading">
        <div className="container">
          <h2 className="error-loading__title">Что-то пошло не&nbsp;так...</h2>
          <p className="error-loading__help">Попробуйте перезагрузить страницу или обратитесь к&nbsp;администратору сайта.</p>
          <div className="error-loading__image">
            <img src={`/${PROJECT_NAME}/img/svg/cake-load.svg`} width="157" height="184" alt="Кекс." />
          </div>
        </div>
      </section>
    </Layout>
  );
}

export default Error;
