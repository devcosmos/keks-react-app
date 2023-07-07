import { createSlice } from '@reduxjs/toolkit';
import { addFavouriteAction, deleteFavouriteAction, fetchFavouritesAction } from '../api-actions';
import { NameSpace } from '../../consts';
import { ProductsFullInfo } from '../../types/products';

export type FavouritesData = {
  favourites: ProductsFullInfo;
  isLoading: boolean;
  isError: boolean;
};

const initialState: FavouritesData = {
  favourites: [],
  isLoading: false,
  isError: false,
};

export const favouritesData = createSlice({
  name: NameSpace.FavouritesData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavouritesAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchFavouritesAction.fulfilled, (state, action) => {
        state.favourites = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchFavouritesAction.rejected, (state) => {
        state.favourites = [];
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(addFavouriteAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addFavouriteAction.fulfilled, (state, action) => {
        state.favourites.push(action.payload);
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(addFavouriteAction.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deleteFavouriteAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteFavouriteAction.fulfilled, (state, action) => {
        state.favourites = state.favourites.filter((product) => product.id !== action.payload.id);
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(deleteFavouriteAction.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  }
});
