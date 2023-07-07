import classNames from 'classnames';
import { useAppDispatch } from '../../hooks';
import { ProductCategory, ProductCategoryInRUS } from '../../consts';
import { Categories } from '../../types/products';
import { changeFilterCategory } from '../../store/products-process/products-process';

type FilterFirstLevelProps = {
  categories: Categories;
  activeCategory: ProductCategory | null;
}

function FilterFirstLevel({categories, activeCategory}: FilterFirstLevelProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
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
              onClick={() => dispatch(
                changeFilterCategory(item.category === activeCategory ? null : item.category)
              )}
            >
              {ProductCategoryInRUS[item.category]}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterFirstLevel;
