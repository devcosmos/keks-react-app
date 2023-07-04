import { Link } from 'react-router-dom';
import LayoutAuth from '../../components/layout-auth/layout-auth';
import { AppRoute } from '../../consts';

function Signup(): JSX.Element {
  return (
    <LayoutAuth className="register">
      <>
        <h1 className="register-page__title">Регистрация</h1>
        <div className="register-page__form">
          <form action="#" method="post" autoComplete="off">
            <div className="register-page__fields">
              <div className="custom-input register-page__field">
                <label>
                  <span className="custom-input__label">Введите ваше имя</span>
                  <input type="text" name="user-name-1" placeholder="Имя" required />
                </label>
              </div>
              <div className="custom-input register-page__field">
                <label>
                  <span className="custom-input__label">Введите вашу почту</span>
                  <input type="email" name="user-mail-1" placeholder="Почта" required />
                </label>
              </div>
              <div className="custom-input register-page__field">
                <label><span className="custom-input__label">Введите ваш пароль</span>
                  <input type="password" name="user-password-1" placeholder="Пароль" required />
                </label>
              </div>
              <div className="custom-input register-page__field">
                <label><span className="custom-input__label">Введите ваше имя</span>
                  <input type="file" name="user-name-1" data-text="Аватар" accept="image/jpeg" />
                </label>
              </div>
            </div>
            <button className="btn register-page__btn btn--large" type="submit">Зарегистрироваться</button>
          </form>
        </div>
        <p className="register-page__text-wrap">
          Уже зарегистрированы? <Link className="register-page__link" to={AppRoute.Login}>Войдите</Link> в свой аккаунт.
        </p>
      </>
    </LayoutAuth>
  );
}

export default Signup;
