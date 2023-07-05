import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductsProcess } from '../../types/state';
import { NameSpace } from '../../consts';

const initialState: ProductsProcess = {
  filterBase: null,
};

export const productsProcess = createSlice({
  name: NameSpace.Process,
  initialState: initialState,
  reducers: {
    changeFilterBase: (state, action: PayloadAction<string | null>) => {
      state.filterBase = action.payload;
    },
  },
});

export const { changeFilterBase } = productsProcess.actions;
