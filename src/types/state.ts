import { AuthStatus } from '../consts';
import { store } from '../store';
import { UserData } from './data';
import { Products } from './products';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ProductsProcess = {
  filterBase: null | string;
};

export type ProductsData = {
  products: Products;
  isLoading: boolean;
};

export type UserProcess = {
  authorizationStatus: AuthStatus;
  user: UserData | null;
};
