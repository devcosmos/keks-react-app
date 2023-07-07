import { ProductCategory, ProductType } from '../consts';

export type Product = {
  id: string;
  title: string;
  category: ProductCategory;
  type: ProductType;
  price: number;
  previewImage: string;
  previewImageWebp: string;
  isFavorite: boolean;
  isNew: boolean;
}

export interface ProductFullInfo extends Product {
  description: string;
  images: string[];
  weight: number;
  rating: number;
  reviewCount: number;
}

export type Products = Product[];
export type ProductsFullInfo = ProductFullInfo[];

export type Categories = {
  category: ProductCategory;
  types: ProductType[];
}[];
