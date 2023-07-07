import { useAppDispatch, useAppSelector } from '../../hooks';
import { addFavouriteAction, deleteFavouriteAction } from '../../store/api-actions';
import { getAuthStatus } from '../../store/user-process/selectors';
import { AppRoute, AuthStatus } from '../../consts';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import { getFavourites } from '../../store/favourites-data/selectors';

type LikeButtonProps = {
  id: string;
  className: string;
}

function LikeButton({id, className}: LikeButtonProps): JSX.Element {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const isAuth = useAppSelector(getAuthStatus) === AuthStatus.Auth;
  const favourites = useAppSelector(getFavourites);
  const isFavourite = favourites.some((element) => element.id === id);

  const handleMyListClick = () => {
    if (isAuth) {
      isFavourite
        ? dispatch(deleteFavouriteAction(id))
        : dispatch(addFavouriteAction(id));
    } else {
      navigate(AppRoute.SignIn);
    }
  };

  return (
    <button
      className={classNames(
        className,
        {[`${className}--active`]: isFavourite}
      )}
      onClick={handleMyListClick}
    >
      <svg width="45" height="37" aria-hidden="true">
        <use xlinkHref="#icon-like" />
      </svg>
      <span className="visually-hidden">
        {isFavourite ? 'Удалить из избранного' : 'Добавить в избранное'}
      </span>
    </button>
  );
}

export default LikeButton;
