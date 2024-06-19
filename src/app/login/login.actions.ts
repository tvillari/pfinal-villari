import { Action, createAction, props } from '@ngrx/store';

export const setLogin = createAction(
  '[Login] Login',
  props<{ payload: { user: boolean; admin: boolean } }>()
);

export const loginActionTypes = {
  SetLogin: setLogin.type,
};

export type LoginActions = {
  payload?: PayloadActions;
} & Action;

interface PayloadActions {
  admin?: boolean;
  user?: boolean;
}
