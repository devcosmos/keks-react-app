import { POSITIVE_RATING_MIN_VALUE, ReviewFilter, ReviewSort } from '../consts';
import { Reviews } from '../types/reviews';

export const getNumberWithSpace = (price: number): string =>
  price.toString().replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ');

export const getNoun = (number: number, one: string, two: string, five: string): string => {
  let absNumber = Math.abs(number);

  absNumber %= 100;
  if (number >= 5 && number <= 20) {
    return five;
  }

  absNumber %= 10;
  if (absNumber === 1) {
    return one;
  }

  if (absNumber >= 2 && absNumber <= 4) {
    return two;
  }

  return five;
};

export const filterReviewsByRating = (reviews: Reviews, type: ReviewFilter): Reviews => {
  let result: Reviews;

  switch (type) {
    case ReviewFilter.Any:
      result = reviews;
      break;
    case ReviewFilter.High:
      result = reviews.filter((review) => review.rating >= POSITIVE_RATING_MIN_VALUE);
      break;
    case ReviewFilter.Low:
      result = reviews.filter((review) => review.rating < POSITIVE_RATING_MIN_VALUE);
      break;
  }

  return result;
};

export const sortReviewsByDate = (reviews: Reviews, type: ReviewSort): Reviews => {
  switch (type) {
    case ReviewSort.Inc:
      reviews.sort((a, b) => Date.parse(a.isoDate) - Date.parse(b.isoDate));
      break;
    case ReviewSort.Desc:
      reviews.sort((a, b) => Date.parse(b.isoDate) - Date.parse(a.isoDate));
      break;
  }

  return reviews;
};
