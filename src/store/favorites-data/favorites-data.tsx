import { createSlice } from '@reduxjs/toolkit';
import { fetchFavoritesAction } from '../api-actions';
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
      });
  }
});
