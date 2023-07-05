import { createReducer } from '@reduxjs/toolkit';
import { changeFilterBase, loadProducts} from './actions';
import { ReducerInitialState } from '../types/state';

const initialState: ReducerInitialState = {
  filterBase: null,
  products: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeFilterBase, (state, action) => {
      state.filterBase = action.payload;
    })
    .addCase(loadProducts, (state, action) => {
      state.products = action.payload;
    });
});

export default reducer;
