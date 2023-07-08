import { Reviews } from '../../types/reviews';
import ReviewItem from '../review-item/review-item';

type ReviewListProps = {
  reviews: Reviews;
}

function ReviewList({reviews}: ReviewListProps): JSX.Element {
  return (
    <section className="comments">
      <h2 className="visually-hidden">Список комментариев</h2>
      <div className="container">
        <div className="comments__wrapper">
          {reviews.map((review) => (
            <ReviewItem key={review.id} review={review} />
          ))}
        </div>
        <div className="comments__show-more">
          <button className="btn btn--second comments__button" type="button">Показать еще</button>
        </div>
      </div>
    </section>
  );
}

export default ReviewList;
