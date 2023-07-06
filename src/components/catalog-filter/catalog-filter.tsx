import classNames from 'classnames';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { changeFilterBase } from '../../store/products-process/products-process';
import { getFilterBase } from '../../store/products-process/selectors';
import { getCategories } from '../../store/products-data/selectors';
import { ProductCategoryInRUS } from '../../consts';

function CatalogFilter(): JSX.Element {
  const dispatch = useAppDispatch();
  const activeCategory = useAppSelector(getFilterBase);
  const categories = useAppSelector(getCategories);

  return (
    <div className="catalog-filter">
      <div className="container">
        <div className="catalog-filter__first-level">
          <h3 className="catalog-filter__title catalog-filter__title--first-level">основы</h3>
          <ul className="catalog-filter__list catalog-filter__list--first-level">
            {categories.map((item) => (
              <li key={item.category} className="catalog-filter__item catalog-filter__item--first-level">
                <button
                  type="button"
                  className={classNames(
                    'btn btn--filter-first-level',
                    {'is-active': activeCategory === item.category}
                  )}
                  onClick={(evt) => {
                    evt.preventDefault();
                    dispatch(changeFilterBase(item.category));
                  }}
                >
                  {ProductCategoryInRUS[item.category]}
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
