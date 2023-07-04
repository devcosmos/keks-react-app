import { Link } from 'react-router-dom';
import LayoutAuth from '../../components/layout-auth/layout-auth';
import { AppRoute } from '../../consts';

function Login(): JSX.Element {
  return (
    <LayoutAuth className="login">
      <>
        <h1 className="login-page__title">Вход</h1>
        <div className="login-page__form">
          <form action="#" method="post" autoComplete="off">
            <div className="login-page__fields">
              <div className="custom-input login-page__field">
                <label>
                  <span className="custom-input__label">Введите вашу почту</span>
                  <input type="email" name="user-mail-1" placeholder="Почта" required />
                </label>
              </div>
              <div className="custom-input login-page__field">
                <label>
                  <span className="custom-input__label">Введите ваш пароль</span>
                  <input type="password" name="user-password-1" placeholder="Пароль" required />
                </label>
              </div>
            </div>
            <button className="btn login-page__btn btn--large" type="submit">Войти</button>
          </form>
        </div>
        <p className="login-page__text-wrap">
          Ещё не зарегистрированы? <Link className="login-page__link" to={AppRoute.Signup}>Создайте</Link> аккаунт прямо сейчас.
        </p>
      </>
    </LayoutAuth>
  );
}

export default Login;
