import { createReducer } from '@reduxjs/toolkit';
import { changeFilterBase } from './actions';
import { ReducerInitialState } from '../types/state';

const initialState: ReducerInitialState = {
  filterBase: null,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeFilterBase, (state, action) => {
      state.filterBase = action.payload;
    });
});

export default reducer;
