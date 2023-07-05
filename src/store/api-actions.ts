import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { redirectToRoute } from './actions';
import { Products } from '../types/products';
import { APIRoute, AppRoute } from '../consts';
import { AuthData, UserData } from '../types/users';
import { dropToken, saveToken } from '../services/token';

function createAsyncThunkTeamplate<Returned = void, ThunkArg = undefined>() {
  return createAsyncThunk<Returned, ThunkArg, {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }>;
}
export const fetchProductsAction = createAsyncThunkTeamplate<Products>()(
  'data/loadProducts',
  async (_, {extra: api}) => {
    const {data} = await api.get<Products>(APIRoute.Products);

    return data;
  },
);

export const checkAuthAction = createAsyncThunkTeamplate<UserData>()(
  'user/checkAuth',
  async (_, {extra: api}) => {
    const {data} = await api.get<UserData>(APIRoute.Login);

    return data;
  },
);

export const loginAction = createAsyncThunkTeamplate<UserData, AuthData>()(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(data.token);
    dispatch(redirectToRoute(AppRoute.Main));

    return data;
  },
);

export const logoutAction = createAsyncThunkTeamplate()(
  'user/logout',
  async (_, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(redirectToRoute(AppRoute.Login));
  },
);
