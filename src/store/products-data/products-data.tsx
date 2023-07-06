import { createSlice } from '@reduxjs/toolkit';
import { fetchProductsAction } from '../api-actions';
import { NameSpace } from '../../consts';
import { Products } from '../../types/products';

export type ProductsData = {
  products: Products;
  isLoading: boolean;
  isError: boolean;
};

const initialState: ProductsData = {
  products: [],
  isLoading: false,
  isError: false,
};

export const productsData = createSlice({
  name: NameSpace.Data,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchProductsAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchProductsAction.fulfilled, (state, action) => {
        state.products = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchProductsAction.rejected, (state) => {
        state.products = [];
        state.isLoading = false;
        state.isError = true;
      });
  }
});
