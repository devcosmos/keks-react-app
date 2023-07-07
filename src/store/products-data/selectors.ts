import { NameSpace } from '../../consts';
import { Categories, ProductFullInfo, Products } from '../../types/products';
import { State } from '../../types/state';

export const getProducts = (state: State): Products => state[NameSpace.ProductsData].products;
export const getProduct = (state: State): ProductFullInfo | null => state[NameSpace.ProductsData].product;
export const getCategories = (state: State): Categories => state[NameSpace.ProductsData].categories;
export const getProductsLoadingStatus = (state: State): boolean => state[NameSpace.ProductsData].isLoading;
export const getProductsErrorStatus = (state: State): boolean => state[NameSpace.ProductsData].isError;
