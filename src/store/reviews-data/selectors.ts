
import { Reviews } from '../../types/reviews';
import { NameSpace } from '../../consts';
import { State } from '../../types/state';

export const getReviews = (state: State): Reviews => state[NameSpace.ReviewsData].reviews;
export const getReviewsLoadingStatus = (state: State): boolean => state[NameSpace.ReviewsData].isLoading;
export const getReviewsErrorStatus = (state: State): boolean => state[NameSpace.ReviewsData].isError;
