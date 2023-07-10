import { Coordinates, Locations } from './types/locations';

export const MAIN_PRODUCT_DISPLAY_COUNT = 3;
export const CATALOG_PRODUCT_DISPLAY_COUNT = 6;
export const REVIEW_DISPLAY_COUNT = 2;
export const RATING_INPUT_COUNT = 5;
export const POSITIVE_RATING_MIN_VALUE = 4;
export const TEXT_REVIEW_MAX_LENGTH = 500;
export const TEXT_REVIEW_MIN_LENGTH = 5;
export const PRODUCT_DESC_COUNT = 140;
export const DEFAULT_MAP_ZOOM = 14;

export const LOCATIONS: Locations = [
  {
    id: 'first-sweetshop',
    name: 'Кондитерская 1',
    address: 'ул. Профессора Попова',
    latitude: 59.970969,
    longitude: 30.316252,
    icon: '/img/content/map-marker2.svg',
  }, {
    id: 'second-sweetshop',
    name: 'Кондитерская 2',
    address: 'Вязовая ул.',
    latitude: 59.967947,
    longitude: 30.274708,
    icon: '/img/content/map-marker2.svg',
  }, {
    id: 'industry',
    name: 'Производство',
    address: 'ул. Ленина, 10',
    latitude: 59.960380,
    longitude: 30.308725,
    icon: '/img/content/map-marker1.svg',
  },
];

export const DEFAULT_MAP_COORDINATES: Coordinates = {
  latitude: 59.966366,
  longitude: 30.297038,
};

export enum AppRoute {
  Main = '/',
  Catalog = '/catalog',
  Product = '/catalog/:id',
  Favourites = '/favourites',
  SignIn = '/signin',
  SignUp = '/signup',
}

export enum APIRoute {
  Products = '/products',
  Favorites = '/favorites',
  Categories = '/categories',
  Reviews = '/reviews',
  LastReview = '/reviews/getLast',
  Login = '/users/login',
  Logout = '/users/logout',
  Registration = '/users/registration',
  Upload = '/users/upload',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
  Registered = 'REGISTERED',
}

export enum RequestStatus {
  Idle = 'IDLE',
  Pending = 'PENDING',
  Fulfilled = 'FULFILLED',
  Rejected = 'REJECTED',
}

export enum ReviewSort {
  Inc = 'inc',
  Desc = 'desc',
}

export enum ReviewFilter {
  Any = 'Любой',
  High = 'Высокий',
  Low = 'Низкий',
}

export enum NameSpace {
  Process = 'PROCESS',
  ProductsData = 'PRODUCTS_DATA',
  FavouritesData = 'FAVOURITES_DATA',
  ReviewsData = 'REVIEWS_DATA',
  User = 'USER',
}

export enum ProductCategory {
  Bisque = 'bisque',
  Cheesecake = 'cheesecake',
  Shortbread = 'shortbread',
  Dessert = 'dessert',
}

export enum ProductType {
  Chocolate = 'chocolate',
  Vanilla = 'vanilla',
  Vegetarian = 'vegetarian',
  HoneyCake = 'honey-cake',
  Lemon = 'lemon',
  NewYork = 'new-york',
  Tart = 'tart',
  FunnelCake = 'funnel-cake',
  BasketCake = 'basket-cake',
  ChocolateMuffin = 'chocolate-muffin',
  BrandMuffin = 'brand-muffin',
}

export const ProductCategoryInRUS:
{[key in ProductCategory]: string} = {
  [ProductCategory.Bisque]: 'Бисквит',
  [ProductCategory.Cheesecake]: 'Чизкейк',
  [ProductCategory.Shortbread]: 'Песочное',
  [ProductCategory.Dessert]: 'Десерт'
};

export const ProductTypeInRUS:
{[key in ProductType]: string} = {
  [ProductType.Chocolate]: 'Шоколадный',
  [ProductType.Vanilla]: 'Ваниль',
  [ProductType.Vegetarian]: 'Вегетарианский',
  [ProductType.HoneyCake]: 'Медовый',
  [ProductType.Lemon]: 'Лимонный',
  [ProductType.NewYork]: 'Нью-Йорк',
  [ProductType.Tart]: 'Тарт',
  [ProductType.FunnelCake]: 'Торт',
  [ProductType.BasketCake]: 'Корзинка',
  [ProductType.ChocolateMuffin]: 'Шоколадный кекс',
  [ProductType.BrandMuffin]: 'Фирменный кекс'
};
