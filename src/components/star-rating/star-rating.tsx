import classNames from 'classnames';
import { RATING_INPUT_COUNT } from '../../consts';

type StarRatingProps = {
  rating: number;
  reviewCount: number;
}

function StarRating({rating, reviewCount}: StarRatingProps): JSX.Element {
  return (
    <div className="star-rating star-rating--big">
      {[...Array(RATING_INPUT_COUNT).keys()].map((star) => (
        <svg
          key={star}
          className={classNames(
            'star-rating__star',
            {'star-rating__star--active': star < Math.round(rating)}
          )}
          width="30"
          height="30"
          aria-hidden="true"
        >
          <use xlinkHref="#icon-star" />
        </svg>
      ))}
      <span className="star-rating__count">{reviewCount}</span>
    </div>
  );
}

export default StarRating;
