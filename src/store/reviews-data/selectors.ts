
import { Reviews } from '../../types/reviews';
import { NameSpace } from '../../consts';
import { State } from '../../types/state';

export const getReviews = (state: State): Reviews => state[NameSpace.ReviewsData].reviews;
