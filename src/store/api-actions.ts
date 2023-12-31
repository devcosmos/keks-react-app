import { AxiosInstance } from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AppDispatch, State } from '../types/state';
import { redirectToRoute } from './actions';
import { Categories, ProductFullInfo, Products, ProductsFullInfo } from '../types/products';
import { APIRoute, AppRoute } from '../consts';
import { AuthData, RegistrationData, UserData } from '../types/users';
import { dropToken, saveToken } from '../services/token';
import { Review, ReviewData, Reviews } from '../types/reviews';

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

export const fetchFavouritesAction = createAsyncThunkTeamplate<ProductsFullInfo>()(
  'data/loadFavourites',
  async (_, {extra: api}) => {
    const {data} = await api.get<ProductsFullInfo>(APIRoute.Favorites);

    return data;
  },
);

export const addFavouriteAction = createAsyncThunkTeamplate<ProductFullInfo, string>()(
  'data/addFavourite',
  async (id, {extra: api}) => {
    const {data} = await api.put<ProductFullInfo>(`${APIRoute.Favorites}/${id}`);

    return data;
  },
);

export const deleteFavouriteAction = createAsyncThunkTeamplate<ProductFullInfo, string>()(
  'data/deleteFavourite',
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

export const fetchReviewsAction = createAsyncThunkTeamplate<Reviews, string>()(
  'data/loadReviews',
  async (id, {extra: api}) => {
    const {data} = await api.get<Reviews>(`${APIRoute.Reviews}/${id}`);

    return data;
  },
);

export const addReviewAction = createAsyncThunkTeamplate<Review, ReviewData>()(
  'data/addReview',
  async ({id, positive, negative, rating}, {extra: api}) => {
    const {data} = await api.post<Review>(`${APIRoute.Reviews}/${id}`, {positive, negative, rating});

    return data;
  },
);

export const fetchLastReviewAction = createAsyncThunkTeamplate<Review>()(
  'data/loadLastReview',
  async (_, {extra: api}) => {
    const {data} = await api.get<Review>(APIRoute.LastReview);

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
