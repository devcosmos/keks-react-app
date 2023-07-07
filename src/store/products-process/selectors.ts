import { NameSpace, ProductCategory, ProductType } from '../../consts';
import { State } from '../../types/state';

export const getFilterCategory = (state: State): ProductCategory | null => state[NameSpace.Process].filterCategory;
export const getFilterTypes = (state: State): ProductType[] => state[NameSpace.Process].filterTypes;
