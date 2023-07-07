import { NameSpace } from '../../consts';
import { Categories, Products } from '../../types/products';
import { State } from '../../types/state';

export const getProducts = (state: State): Products => state[NameSpace.Data].products;
export const getCategories = (state: State): Categories => state[NameSpace.Data].categories;
export const getLoadingStatus = (state: State): boolean => state[NameSpace.Data].isLoading;
export const getErrorStatus = (state: State): boolean => state[NameSpace.Data].isError;
