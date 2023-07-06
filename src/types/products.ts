import { ProductCategory, ProductType } from '../consts';

export type Product = {
  id: string;
  title: string;
  category: string;
  type: string;
  price: number;
  previewImage: string;
  previewImageWebp: string;
  isFavorite: boolean;
  isNew: boolean;
}

export type Products = Product[];

export type Categories = {
  category: ProductCategory;
  types: ProductType[];
}[];
