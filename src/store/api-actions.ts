import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { loadProducts } from './actions';
import { Products } from '../types/products';
import { APIRoute } from '../consts';

export const fetchProductsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch;
  state: State;
  extra: AxiosInstance;
}>(
  'data/loadProducts',
  async (_arg, {dispatch, extra: api}) => {
    const {data} = await api.get<Products>(APIRoute.Products);
    dispatch(loadProducts(data));
  },
);
