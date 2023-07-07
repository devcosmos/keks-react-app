import { NameSpace } from '../../consts';
import { ProductsFullInfo } from '../../types/products';
import { State } from '../../types/state';

export const getFavorites = (state: State): ProductsFullInfo => state[NameSpace.FavoritesData].favorites;
