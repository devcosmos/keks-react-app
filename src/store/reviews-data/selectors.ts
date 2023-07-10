
import { Review, Reviews } from '../../types/reviews';
import { NameSpace, RequestStatus } from '../../consts';
import { State } from '../../types/state';

export const getReviews = (state: State): Reviews => state[NameSpace.ReviewsData].reviews;
export const getLastReview = (state: State): Review | null => state[NameSpace.ReviewsData].lastReview;
export const getReviewsLoadingStatus = (state: State): boolean => state[NameSpace.ReviewsData].isLoading;
export const getReviewsErrorStatus = (state: State): boolean => state[NameSpace.ReviewsData].isError;
export const getReviewsPublishStatus = (state: State): RequestStatus => state[NameSpace.ReviewsData].reviewsPublishStatus;
