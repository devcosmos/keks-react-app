import { createSlice } from '@reduxjs/toolkit';
import { fetchCategoriesAction, fetchProductAction, fetchProductsAction } from '../api-actions';
import { NameSpace } from '../../consts';
import { Categories, ProductFullInfo, Products } from '../../types/products';

export type ProductsData = {
  products: Products;
  product: ProductFullInfo | null;
  categories: Categories;
  isLoading: boolean;
  isError: boolean;
};

const initialState: ProductsData = {
  products: [],
  product: null,
  categories: [],
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
      })
      .addCase(fetchProductAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchProductAction.fulfilled, (state, action) => {
        state.product = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchProductAction.rejected, (state) => {
        state.product = null;
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(fetchCategoriesAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchCategoriesAction.fulfilled, (state, action) => {
        state.categories = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchCategoriesAction.rejected, (state) => {
        state.categories = [];
        state.isLoading = false;
        state.isError = true;
      });
  }
});
