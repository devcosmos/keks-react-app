import { createSlice } from '@reduxjs/toolkit';
import { fetchReviewsAction } from '../api-actions';
import { NameSpace } from '../../consts';
import { Reviews } from '../../types/reviews';

export type ReviewsData = {
  reviews: Reviews;
  isLoading: boolean;
  isError: boolean;
};

const initialState: ReviewsData = {
  reviews: [],
  isLoading: false,
  isError: false,
};

export const reviewsData = createSlice({
  name: NameSpace.ReviewsData,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchReviewsAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchReviewsAction.rejected, (state) => {
        state.reviews = [];
        state.isLoading = false;
        state.isError = true;
      });
  }
});
