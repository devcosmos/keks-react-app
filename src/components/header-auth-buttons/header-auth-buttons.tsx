import { Link } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { logoutAction } from '../../store/api-actions';
import { AppRoute } from '../../consts';
import { getFavorites } from '../../store/favorites-data/selectors';

type HeaderButtonsProps = {
  isAuth: boolean;
}

function HeaderButtons({isAuth}: HeaderButtonsProps): JSX.Element {
  const dispatch = useAppDispatch();
  const favorites = useAppSelector(getFavorites);

  return (
    <div className="header__buttons">
      {isAuth ? (
        <>
          <Link className="header__favourite" to={AppRoute.Favourites}>
            <span className="header__favourite-icon">
              <svg width="33" height="29" aria-hidden="true">
                <use xlinkHref="#icon-favourite" />
              </svg>
            </span>
            {favorites.length > 0 && <span className="header__favourite-number">{favorites.length}</span>}
            <span className="visually-hidden">Избранное</span>
          </Link>
          <div className="header__buttons-authorized">
            <div className="header__btn">
              <Link
                className="btn btn--second"
                to={AppRoute.SignIn}
                onClick={(evt) => {
                  evt.preventDefault();
                  dispatch(logoutAction());
                }}
              >
                Выйти
              </Link>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="header__btn">
            <Link
              className="btn btn--third header__link header__link--reg"
              to={AppRoute.SignUp}
            >
              Регистрация
            </Link>
          </div>
          <div className="header__btn">
            <Link className="btn" to={AppRoute.SignIn}>
              Войти
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default HeaderButtons;
