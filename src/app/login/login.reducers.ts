import { Login } from './login.model';
import { LoginActions, loginActionTypes } from './login.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

const initialState: Login = { user: true, admin: false };
export const loginReducer = (
  state: Login = initialState,
  action: LoginActions
): Login => {
  switch (action.type) {
    case loginActionTypes.SetLogin:
      return {
        ...state,
        user: action.payload?.user!,
        admin: action.payload?.admin!,
      };
    default:
      return state;
  }
};

export const getLoginState = createFeatureSelector<Login>('login');
export const getUser = createSelector(
  getLoginState,
  (state: Login) => state.user
);

export const getAdmin = createSelector(
  getLoginState,
  (state: Login) => state.admin
);
