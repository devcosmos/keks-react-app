import { createSlice } from '@reduxjs/toolkit';
import { addReviewAction, fetchLastReviewAction, fetchReviewsAction } from '../api-actions';
import { NameSpace, RequestStatus } from '../../consts';
import { Review, Reviews } from '../../types/reviews';

export type ReviewsData = {
  reviews: Reviews;
  lastReview: Review | null;
  isLoading: boolean;
  isError: boolean;
  reviewsPublishStatus: RequestStatus;
};

const initialState: ReviewsData = {
  reviews: [],
  lastReview: null,
  isLoading: false,
  isError: false,
  reviewsPublishStatus: RequestStatus.Idle,
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
      })
      .addCase(addReviewAction.pending, (state) => {
        state.reviewsPublishStatus = RequestStatus.Pending;
      })
      .addCase(addReviewAction.fulfilled, (state, action) => {
        state.reviews.push(action.payload);
        state.reviewsPublishStatus = RequestStatus.Fulfilled;
      })
      .addCase(addReviewAction.rejected, (state) => {
        state.reviewsPublishStatus = RequestStatus.Rejected;
      })
      .addCase(fetchLastReviewAction.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchLastReviewAction.fulfilled, (state, action) => {
        state.lastReview = action.payload;
        state.isLoading = false;
        state.isError = false;
      })
      .addCase(fetchLastReviewAction.rejected, (state) => {
        state.lastReview = null;
        state.isLoading = false;
        state.isError = true;
      });
  }
});
