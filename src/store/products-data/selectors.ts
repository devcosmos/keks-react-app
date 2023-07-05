import { NameSpace } from '../../consts';
import { Products } from '../../types/products';
import { State } from '../../types/state';

export const getProducts = (state: State): Products => state[NameSpace.Data].products;
export const getLoadingStatus = (state: State): boolean => state[NameSpace.Data].isLoading;
