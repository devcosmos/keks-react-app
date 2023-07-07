import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { NameSpace, ProductCategory, ProductType } from '../../consts';

type ProductsProcess = {
  filterCategory: null | ProductCategory;
  filterTypes: ProductType[];
};

const initialState: ProductsProcess = {
  filterCategory: null,
  filterTypes: [],
};

export const productsProcess = createSlice({
  name: NameSpace.Process,
  initialState: initialState,
  reducers: {
    changeFilterCategory: (state, action: PayloadAction<ProductCategory | null>) => {
      state.filterCategory = action.payload;
      state.filterTypes = [];
    },
    changeFilterType: (state, action: PayloadAction<ProductType>) => {
      if (state.filterTypes.includes(action.payload)) {
        state.filterTypes = state.filterTypes.filter((type) => type !== action.payload);
      } else {
        state.filterTypes.push(action.payload);
      }
    },
  },
});

export const { changeFilterCategory, changeFilterType } = productsProcess.actions;
