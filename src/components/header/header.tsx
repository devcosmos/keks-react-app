import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { useAppSelector } from '../../hooks';
import { AppRoute, PROJECT_NAME } from '../../consts';
import { getCurrentUser } from '../../store/user-process/selectors';
import HeaderButtons from '../header-auth-buttons/header-auth-buttons';

function Header(): JSX.Element {
  const user = useAppSelector(getCurrentUser);
  const isAuth = user !== null;

  return (
    <header
      className={classNames(
        'header',
        {'header--authorized': isAuth}
      )}
    >
      <div className="container">
        <div className="header__inner">
          <Link className="header__logo" to={AppRoute.Main}>
            <img src={`/${PROJECT_NAME}/img/svg/logo.svg`} width="170" height="69" alt="Кондитерская кекс" />
          </Link>
          {isAuth && (
            <div className="header__user-info-wrap">
              <div className="header__user-info">
                <div className="header__user-avatar">
                  <picture>
                    <source type="image/webp" src={user.avatarUrl} />
                    <img src={user.avatarUrl} width="62" height="62" alt="Аватар пользователя." />
                  </picture>
                </div>
                <p className="header__user-mail">{user.email}</p>
              </div>
            </div>
          )}
          <HeaderButtons isAuth={isAuth} />
        </div>
      </div>
    </header>
  );
}

export default Header;
