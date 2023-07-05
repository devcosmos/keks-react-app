import { AuthStatus, NameSpace } from '../../consts';
import { UserData } from '../../types/users';
import { State } from '../../types/state';

export const getAuthStatus = (state: State): AuthStatus => state[NameSpace.User].authorizationStatus;
export const getCurrentUser = (state: State): UserData | null => state[NameSpace.User].user;
