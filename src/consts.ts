export const BASICS = ['Бисквит', 'Десерт', 'Чизкейк', 'Песочное'];
export const MAIN_PRODUCT_DISPLAY_COUNT = 3;

export enum AppRoute {
  Main = '/',
  Catalog = '/catalog',
  Product = '/catalog/:id',
  Favourites = '/favourites',
  Login = '/login',
  Signup = '/signup',
}

export enum APIRoute {
  Products = '/products',
}
