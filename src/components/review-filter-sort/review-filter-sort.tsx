import { ReviewFilter, ReviewSort } from '../../consts';
import ReviewFilterButton from '../review-filter-button/review-filter-button';
import SortButton from '../sort-button/sort-button';

type ReviewFilterSortProps = {
  activeSort: ReviewSort;
  activeFilter: ReviewFilter;
  changeSort: (sort: ReviewSort) => void;
  changeFilter: (filter: ReviewFilter) => void;
}

function ReviewFilterSort({activeSort, activeFilter, changeSort, changeFilter}: ReviewFilterSortProps): JSX.Element {
  return (
    <div className="filter-sort">
      <div className="container">
        <div className="filter-sort__inner">
          <div className="filter-sort__filter-wrap">
            <h3 className="filter-sort__filter-title">Показать с рейтингом</h3>
            <div className="filter-sort__filter">
              <button className="filter-sort__filter-btn" type="button">
                {activeFilter}
                <svg className="filter-sort__filter-icon" width="14" height="15" aria-hidden="true">
                  <use xlinkHref="#icon-polygon" />
                </svg>
              </button>
              <ul className="filter-sort__filter-list">
                {Object.values(ReviewFilter).map((filter, i) => (
                  <ReviewFilterButton
                    key={filter}
                    id={`review-sort-${i}`}
                    name={filter}
                    activeFilter={activeFilter}
                    changeFilter={changeFilter}
                  />
                ))}
              </ul>
            </div>
          </div>
          <div className="filter-sort__sort-wrap">
            <h3 className="filter-sort__sort-title">Сортировать по дате</h3>
            <div className="filter-sort__sort-btns-wrap">
              {Object.values(ReviewSort).map((sort) => (
                <SortButton
                  key={sort}
                  name={sort}
                  activeSort={activeSort}
                  changeSort={changeSort}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewFilterSort;
