import { store } from '../store';
import { Products } from './products';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type ReducerInitialState = {
  filterBase: null | string;
  products: Products;
};
