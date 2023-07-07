import { useAppDispatch } from '../../hooks';
import { ProductType, ProductTypeInRUS } from '../../consts';
import { changeFilterType } from '../../store/products-process/products-process';

type FilterSecondLevelProps = {
  types: ProductType[];
  activeTypes: ProductType[];
}

function FilterSecondLevel({types, activeTypes}: FilterSecondLevelProps): JSX.Element {
  const dispatch = useAppDispatch();

  return (
    <div className="catalog-filter__second-level">
      <h3 className="catalog-filter__title catalog-filter__title--second-level">начинки</h3>
      <ul className="catalog-filter__list catalog-filter__list--second-level">
        {types.map((type) => (
          <li key={type} className="catalog-filter__item catalog-filter__item--second-level">
            <div className="custom-toggle custom-toggle--checkbox">
              <input
                type="checkbox"
                value={type}
                id={`catalog-second-level-id-${type}`}
                name="catalog-second-level"
                onChange={() => dispatch(changeFilterType(type))}
                checked={activeTypes.includes(type)}
              />
              <label className="custom-toggle__label" htmlFor={`catalog-second-level-id-${type}`}>
                {ProductTypeInRUS[type]}
              </label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default FilterSecondLevel;
