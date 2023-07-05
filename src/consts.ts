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
  Login = '/users/login',
  Logout = '/users/logout',
  Registration = '/users/registration',
  Upload = '/users/upload',
}

export enum AuthStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum NameSpace {
  Process = 'PROCESS',
  Data = 'DATA',
  User = 'USER',
}

