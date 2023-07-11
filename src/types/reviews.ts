export type Review = {
  id: string;
  isoDate: string;
  positive: string;
  negative: string;
  rating: number;
  user: {
    name: string;
    avatarUrl: string;
  };
}

export type Reviews = Review[];

export type ReviewData = {
  id: string;
  positive: string;
  negative: string;
  rating: number;
}

type ReviewFieldData = {
  value: string | number;
  valid: string;
  message: string;
}

export type ReviewFormData = {
  [key: string]: ReviewFieldData;
}
