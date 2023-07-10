import { ChangeEvent } from 'react';
import { getNoun } from '../utils';

type StarRatingInputProps = {
  rating: number;
  currRating: number;
  onChange: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function StarRatingInput({rating, currRating, onChange}: StarRatingInputProps): JSX.Element {
  return (
    <>
      <input
        onChange={onChange}
        type="radio"
        name="rating"
        id={`input-star-rating-${rating}`}
        value={rating}
        checked={rating === currRating}
        aria-label={`${rating} ${getNoun(rating, 'звезда', 'звезды', 'звёзд')}`}
        required
      />
      <label htmlFor={`input-star-rating-${rating}`}>
        <svg width="40" height="40" aria-hidden="true">
          <use xlinkHref="#icon-star" />
        </svg>
      </label>
    </>
  );
}

export default StarRatingInput;
