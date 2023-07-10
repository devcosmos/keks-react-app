import { ReviewFilter } from '../../consts';

type ReviewFilterButtonProps = {
  id: string;
  name: ReviewFilter;
  activeFilter: ReviewFilter;
  changeFilter: (sort: ReviewFilter) => void;
}

function ReviewFilterButton({id, name, activeFilter, changeFilter}: ReviewFilterButtonProps): JSX.Element {
  return (
    <li className="filter-sort__filter-item">
      <div className="custom-toggle custom-toggle--sorting">
        <input
          onChange={() => changeFilter(name)}
          type="radio"
          id={id}
          name="review-sort"
          checked={name === activeFilter}
        />
        <label className="custom-toggle__label" htmlFor={id}>
          {name}
        </label>
      </div>
    </li>
  );
}

export default ReviewFilterButton;
