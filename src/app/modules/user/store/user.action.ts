import { createAction, props } from '@ngrx/store';
import { IUser } from '../user.model';

export enum UserActionTypes {
  LoadUsers = '[User] Load',
  LoadUsersSuccess = '[User] Load (success)'
}
export const LoadUsers = createAction(
  UserActionTypes.LoadUsers,
);
export const LoadUsersSuccess = createAction(
  UserActionTypes.LoadUsersSuccess,
  props<{ items: IUser[] }>()
);