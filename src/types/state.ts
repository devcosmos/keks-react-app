import { AuthStatus } from '../consts';
import { store } from '../store';
import { UserData } from './users';

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type UserProcess = {
  authorizationStatus: AuthStatus;
  user: UserData | null;
};
