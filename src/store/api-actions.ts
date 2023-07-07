import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { redirectToRoute } from './actions';
import { Categories, ProductFullInfo, Products, ProductsFullInfo } from '../types/products';
import { APIRoute, AppRoute } from '../consts';
import { AuthData, RegistrationData, UserData } from '../types/users';
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

export const fetchProductAction = createAsyncThunkTeamplate<ProductFullInfo, string>()(
  'data/loadProduct',
  async (id, {extra: api}) => {
    const {data} = await api.get<ProductFullInfo>(`${APIRoute.Products}/${id}`);

    return data;
  },
);

export const fetchFavoritesAction = createAsyncThunkTeamplate<ProductsFullInfo>()(
  'data/loadFavorites',
  async (_, {extra: api}) => {
    const {data} = await api.get<ProductsFullInfo>(APIRoute.Favorites);

    return data;
  },
);

export const addFavoriteAction = createAsyncThunkTeamplate<ProductFullInfo, string>()(
  'data/addFavorite',
  async (id, {extra: api}) => {
    const {data} = await api.put<ProductFullInfo>(`${APIRoute.Favorites}/${id}`);

    return data;
  },
);

export const deleteFavoriteAction = createAsyncThunkTeamplate<ProductFullInfo, string>()(
  'data/deleteFavorite',
  async (id, {extra: api}) => {
    const {data} = await api.delete<ProductFullInfo>(`${APIRoute.Favorites}/${id}`);

    return data;
  },
);

export const fetchCategoriesAction = createAsyncThunkTeamplate<Categories>()(
  'data/loadCategories',
  async (_, {extra: api}) => {
    const {data} = await api.get<Categories>(APIRoute.Categories);

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

export const registrationAction = createAsyncThunkTeamplate<UserData, RegistrationData>()(
  'user/registration',
  async ({name, email, password}, {extra: api}) => {
    const {data} = await api.post<UserData>(APIRoute.Registration, {name, email, password});

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
    dispatch(redirectToRoute(AppRoute.SignIn));
  },
);
