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
