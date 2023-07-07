import { useAppDispatch, useAppSelector } from '../../hooks';
import { addFavoriteAction, deleteFavoriteAction } from '../../store/api-actions';
import { getAuthStatus } from '../../store/user-process/selectors';
import { AppRoute, AuthStatus } from '../../consts';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { getFavorites } from '../../store/favorites-data/selectors';

type LikeButtonProps = {
  id: string;
  className: string;
}

function LikeButton({id, className}: LikeButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuth = useAppSelector(getAuthStatus) === AuthStatus.Auth;
  const favorites = useAppSelector(getFavorites);
  const isFavorite = favorites.some((element) => element.id === id);

  const handleMyListClick = () => {
    if (isAuth) {
      isFavorite
        ? dispatch(deleteFavoriteAction(id))
        : dispatch(addFavoriteAction(id));
    } else {
      navigate(AppRoute.SignIn);
    }
  };

  return (
    <button
      className={classNames(
        className,
        {[`${className}--active`]: isFavorite}
      )}
      onClick={handleMyListClick}
    >
      <svg width="45" height="37" aria-hidden="true">
        <use xlinkHref="#icon-like" />
      </svg>
      <span className="visually-hidden">
        {isFavorite ? 'Удалить из избранного' : 'Добавить в избранное'}
      </span>
    </button>
  );
}

export default LikeButton;
