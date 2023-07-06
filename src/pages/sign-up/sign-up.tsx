import { Link } from 'react-router-dom';
import LayoutAuth from '../../components/layout-auth/layout-auth';
import { AppRoute, AuthStatus } from '../../consts';
import { useAppSelector } from '../../hooks';
import { getAuthStatus } from '../../store/user-process/selectors';
import SignUpForm from '../../components/sign-up-form/sign-up-form';

function SignUp(): JSX.Element {
  const isRegistered = useAppSelector(getAuthStatus) === AuthStatus.Registered;

  return (
    <LayoutAuth className="register">
      <>
        <h1 className="register-page__title">Регистрация</h1>
        {isRegistered && (
          <p className="register-page__text-wrap">
            Вы успешно зарегистрировались! <Link className="register-page__link" to={AppRoute.SignIn}>Войдите</Link> в свой аккаунт.
          </p>
        )}
        <div className="register-page__form">
          <SignUpForm />
        </div>
        {!isRegistered && (
          <p className="register-page__text-wrap">
            Уже зарегистрированы? <Link className="register-page__link" to={AppRoute.SignIn}>Войдите</Link> в свой аккаунт.
          </p>
        )}
      </>
    </LayoutAuth>
  );
}

export default SignUp;
