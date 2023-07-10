import classNames from 'classnames';
import { ReviewSort } from '../../consts';

type SortButtonProps = {
  name: ReviewSort;
  activeSort: ReviewSort;
  changeSort: (sort: ReviewSort) => void;
}

function SortButton({name, activeSort, changeSort}: SortButtonProps): JSX.Element {
  return (
    <button
      onClick={() => changeSort(name)}
      className={classNames(
        'filter-sort__sort-btn',
        `filter-sort__sort-btn--${name}`,
        {'filter-sort__sort-btn--active': activeSort === name}
      )}
      type="button"
      aria-label={`сортировка по ${name === ReviewSort.Inc ? 'возрастанию' : 'убыванию'}`}
    >
      <svg className="filter-sort__sort-icon" width="19" height="13" aria-hidden="true">
        <use xlinkHref="#icon-chevron-top" />
      </svg>
    </button>
  );
}

export default SortButton;
