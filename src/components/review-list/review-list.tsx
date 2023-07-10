import { useState } from 'react';
import { useAppSelector } from '../../hooks';
import { REVIEW_DISPLAY_COUNT, ReviewFilter, ReviewSort } from '../../consts';
import { getReviews } from '../../store/reviews-data/selectors';
import { filterByReviews } from '../utils';
import ReviewFilterSort from '../review-filter-sort/review-filter-sort';
import ReviewEmpty from '../review-empty/review-empty';
import ReviewItem from '../review-item/review-item';

function ReviewList(): JSX.Element {
  const [showCount, setShowCount] = useState<number>(REVIEW_DISPLAY_COUNT);
  const [sort, setSort] = useState<ReviewSort>(ReviewSort.Desc);
  const [filter, setFilter] = useState<ReviewFilter>(ReviewFilter.Any);

  const reviews = useAppSelector(getReviews);

  const sortReviews = sort === ReviewSort.Desc ? reviews.slice().reverse() : reviews;
  const filteredReviews = filterByReviews(sortReviews, filter);

  if (!reviews.length) {
    return (
      <ReviewEmpty
        title="Про этот кекс нам ничего не рассказали. Вы можете оставить свой отзыв первым."
      />
    );
  }

  return (
    <>
      <ReviewFilterSort
        activeSort={sort}
        activeFilter={filter}
        changeSort={setSort}
        changeFilter={setFilter}
      />
      {filteredReviews.length ? (
        <section className="comments">
          <h2 className="visually-hidden">Список комментариев</h2>
          <div className="container">
            <div className="comments__wrapper">
              {filteredReviews.slice(0, showCount).map((review) => (
                <ReviewItem key={review.id} review={review} />
              ))}
            </div>
            {filteredReviews.length > showCount && (
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
      ) : (
        <ReviewEmpty
          title="По вашему запросу информации не найдено"
          className="empty-results--has-sort"
        >
          <button
            className="btn btn--second empty-results__button"
            type="button"
            onClick={() => setFilter(ReviewFilter.Any)}
          >
            Сбросить фильтры
          </button>
        </ReviewEmpty>
      )}
    </>
  );
}

export default ReviewList;
