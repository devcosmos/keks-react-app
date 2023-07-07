import { NameSpace } from '../../consts';
import { ProductsFullInfo } from '../../types/products';
import { State } from '../../types/state';

export const getFavourites = (state: State): ProductsFullInfo => state[NameSpace.FavouritesData].favourites;
