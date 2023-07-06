import { Link } from 'react-router-dom';
import LayoutAuth from '../../components/layout-auth/layout-auth';
import { AppRoute } from '../../consts';
import SignInForm from '../../components/sign-in-form/sign-in-form';

function SignIn(): JSX.Element {
  return (
    <LayoutAuth className="login">
      <>
        <h1 className="login-page__title">Вход</h1>
        <div className="login-page__form">
          <SignInForm />
        </div>
        <p className="login-page__text-wrap">
          Ещё не зарегистрированы? <Link className="login-page__link" to={AppRoute.SignUp}>Создайте</Link> аккаунт прямо сейчас.
        </p>
      </>
    </LayoutAuth>
  );
}

export default SignIn;
