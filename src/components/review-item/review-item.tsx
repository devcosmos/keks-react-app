import classNames from 'classnames';
import { Review } from '../../types/reviews';
import StarRating from '../star-rating/star-rating';
import { format } from 'date-fns';

type ReviewItemProps = {
  review: Review;
  withBorder?: boolean;
}

function ReviewItem({review, withBorder = false}: ReviewItemProps): JSX.Element {
  const {isoDate, positive, negative, rating, user} = review;
  const date = new Date(isoDate);

  return (
    <div className="review">
      <div
        className={classNames(
          'review__inner-wrapper',
          {'review__inner-wrapper--border': withBorder}
        )}
      >
        <time className="review__date" dateTime={format(date, 'yyyy-MM-dd')}>
          {format(date, 'dd.MM')}
        </time>
        <span className="review__author">Уважаемый(-ая) Кот</span>
        <StarRating rating={rating} />
        <div className="review__text-wrapper">
          {positive && <p className="review__text">{positive}</p>}
          {negative && <p className="review__text">{negative}</p>}
        </div>
        <div className="review__image-wrapper">
          <picture>
            <img src={user.avatarUrl} width="162" height="162" alt={user.name} />
          </picture>
        </div>
      </div>
    </div>
  );
}

export default ReviewItem;
