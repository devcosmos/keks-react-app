import { ProductCategory, ProductType } from '../../consts';
import { Categories } from '../../types/products';
import FilterFirstLevel from '../filter-first-level/filter-first-level';
import FilterSecondLevel from '../filter-second-level/filter-second-level';

type CatalogFilterProps = {
  categories: Categories;
  activeCategory: ProductCategory | null;
  activeTypes: ProductType[];
}

function CatalogFilter({categories, activeCategory, activeTypes}: CatalogFilterProps): JSX.Element {
  const types = categories.find((item) => item.category === activeCategory)?.types;

  return (
    <div className="catalog-filter">
      <div className="container">
        <FilterFirstLevel categories={categories} activeCategory={activeCategory} />
        {types?.length && (<FilterSecondLevel types={types} activeTypes={activeTypes} />)}
      </div>
    </div>
  );
}

export default CatalogFilter;
