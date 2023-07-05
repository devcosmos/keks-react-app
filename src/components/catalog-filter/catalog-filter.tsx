import classNames from 'classnames';
import { BASICS } from '../../consts';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFilterBase } from '../../store/products-process/products-process';
import { getFilterBase } from '../../store/products-process/selectors';

function CatalogFilter(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeBase = useAppSelector(getFilterBase);

  return (
    <div className="catalog-filter">
      <div className="container">
        <div className="catalog-filter__first-level">
          <h3 className="catalog-filter__title catalog-filter__title--first-level">основы</h3>
          <ul className="catalog-filter__list catalog-filter__list--first-level">
            {BASICS.map((base) => (
              <li key={base} className="catalog-filter__item catalog-filter__item--first-level">
                <button
                  type="button"
                  className={classNames(
                    'btn btn--filter-first-level',
                    {'is-active': activeBase === base}
                  )}
                  onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(changeFilterBase(base));
                  }}
                >
                  {base}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CatalogFilter;
