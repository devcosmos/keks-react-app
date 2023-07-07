import { createSlice } from '@reduxjs/toolkit';
import { addFavoriteAction, deleteFavoriteAction, fetchFavoritesAction } from '../api-actions';
import { NameSpace } from '../../consts';
import { ProductsFullInfo } from '../../types/products';

export type FavoritesData = {
  favorites: ProductsFullInfo;
  isLoading: boolean;
  isError: boolean;
};

const initialState: FavoritesData = {
  favorites: [],
  isLoading: false,
  isError: false,
};

export const favoritesData = createSlice({
  name: NameSpace.FavoritesData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchFavoritesAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchFavoritesAction.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchFavoritesAction.rejected, (state) => {
        state.favorites = [];
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(addFavoriteAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(addFavoriteAction.fulfilled, (state, action) => {
        state.favorites.push(action.payload);
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(addFavoriteAction.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deleteFavoriteAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(deleteFavoriteAction.fulfilled, (state, action) => {
        state.favorites = state.favorites.filter((product) => product.id !== action.payload.id);
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(deleteFavoriteAction.rejected, (state) => {
        state.isLoading = false;
        state.isError = true;
      });
  }
});
