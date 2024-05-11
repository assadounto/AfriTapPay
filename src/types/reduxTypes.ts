// types/reduxTypes.ts

export interface User {
  userInfo: any;
  userToken: string;
}

export interface UserState {
  userInfo: User | null;
  userToken: string | null;
  emailConfirmed: boolean;
}

export interface RootState {
  user: UserState;
  // Add other state slices as needed
}

export enum ActionTypes {
  LOGIN = 'LOGIN',
  LOGOUT = 'LOGOUT',
  // Add other action types as needed
}

export interface LoginAction {
  type: ActionTypes.LOGIN;
  payload: {
    userInfo: User;
    userToken: string;
  };
}

export interface LogoutAction {
  type: ActionTypes.LOGOUT;
}
