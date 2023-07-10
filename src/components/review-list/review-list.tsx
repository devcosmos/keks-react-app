import { REVIEW_DISPLAY_COUNT } from '../../consts';
import { Reviews } from '../../types/reviews';
import ReviewFilterSort from '../review-filter-sort/review-filter-sort';
import ReviewItem from '../review-item/review-item';

type ReviewListProps = {
  reviews: Reviews;
  showCount: number;
  setShowCount: (count: number) => void;
}

function ReviewList({reviews, showCount, setShowCount}: ReviewListProps): JSX.Element {
  return (
    <>
      <ReviewFilterSort />
      <section className="comments">
        <h2 className="visually-hidden">Список комментариев</h2>
        <div className="container">
          <div className="comments__wrapper">
            {reviews.slice(0, showCount).map((review) => (
              <ReviewItem key={review.id} review={review} />
            ))}
          </div>
          {reviews.length > showCount && (
            <div className="comments__show-more">
              <button
                className="btn btn--second comments__button"
                type="button"
                onClick={() => setShowCount(showCount + REVIEW_DISPLAY_COUNT)}
              >
                Показать ещё
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default ReviewList;
