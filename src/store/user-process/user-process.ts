import { createSlice } from '@reduxjs/toolkit';
import { checkAuthAction, loginAction, logoutAction, registrationAction } from '../api-actions';
import { AuthStatus, NameSpace, RequestStatus } from '../../consts';
import { UserData } from '../../types/users';

export type UserProcess = {
  authorizationStatus: AuthStatus;
  singUpRequestStatus: RequestStatus;
  singInRequestStatus: RequestStatus;
  user: UserData | null;
};

const initialState: UserProcess = {
  authorizationStatus: AuthStatus.Unknown,
  singUpRequestStatus: RequestStatus.Idle,
  singInRequestStatus: RequestStatus.Idle,
  user: null,
};

export const userProcess = createSlice({
  name: NameSpace.User,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(checkAuthAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthStatus.Auth;
        state.user = action.payload;
      })
      .addCase(checkAuthAction.rejected, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
      })
      .addCase(loginAction.pending, (state) => {
        state.singInRequestStatus = RequestStatus.Pending;
      })
      .addCase(loginAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthStatus.Auth;
        state.singInRequestStatus = RequestStatus.Fulfilled;
        state.user = action.payload;
      })
      .addCase(loginAction.rejected, (state) => {
        state.singInRequestStatus = RequestStatus.Rejected;
        state.authorizationStatus = AuthStatus.NoAuth;
        state.user = null;
      })
      .addCase(registrationAction.pending, (state) => {
        state.singUpRequestStatus = RequestStatus.Pending;
      })
      .addCase(registrationAction.fulfilled, (state, action) => {
        state.authorizationStatus = AuthStatus.Registered;
        state.singUpRequestStatus = RequestStatus.Fulfilled;
        state.user = action.payload;
      })
      .addCase(registrationAction.rejected, (state) => {
        state.singUpRequestStatus = RequestStatus.Rejected;
      })
      .addCase(logoutAction.fulfilled, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
        state.user = null;
      })
      .addCase(logoutAction.rejected, (state) => {
        state.authorizationStatus = AuthStatus.NoAuth;
        state.user = null;
      });
  }
});
