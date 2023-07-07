export const MAIN_PRODUCT_DISPLAY_COUNT = 3;
export const CATALOG_PRODUCT_DISPLAY_COUNT = 6;
export const RATING_INPUT_COUNT = 5;
export const PRODUCT_DESC_COUNT = 140;

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

export enum NameSpace {
  Process = 'PROCESS',
  ProductsData = 'PRODUCTS_DATA',
  FavoritesData = 'FAVORITES_DATA',
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
