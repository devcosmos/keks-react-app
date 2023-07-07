import { combineReducers } from '@reduxjs/toolkit';
import { productsProcess } from './products-process/products-process';
import { productsData } from './products-data/products-data';
import { favouritesData } from './favourites-data/favourites-data';
import { userProcess } from './user-process/user-process';
import { NameSpace } from '../consts';

export const rootReducer = combineReducers({
  [NameSpace.Process]: productsProcess.reducer,
  [NameSpace.ProductsData]: productsData.reducer,
  [NameSpace.FavouritesData]: favouritesData.reducer,
  [NameSpace.User]: userProcess.reducer,
});
