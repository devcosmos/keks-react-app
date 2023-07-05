import { createSlice } from '@reduxjs/toolkit';
import { fetchProductsAction } from '../api-actions';
import { ProductsData } from '../../types/state';
import { NameSpace } from '../../consts';

const initialState: ProductsData = {
  products: [],
  isLoading: false,
};

export const productsData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductsAction.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchProductsAction.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
      })
      .addCase(fetchProductsAction.rejected, (state) => {
        state.products = [];
        state.isLoading = false;
      });
  }
});
