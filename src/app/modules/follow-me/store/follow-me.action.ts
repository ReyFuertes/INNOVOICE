import { createAction, props } from '@ngrx/store';
import { IFollowMe } from '../follow-me.model';

export enum FollowMeActionTypes {
  LoadFollowMe = '[FollowMe] Load',
  LoadFollowMeSuccess = '[FollowMe] Load (success)'
}
export const LoadFollowMe = createAction(
  FollowMeActionTypes.LoadFollowMe,
);
export const LoadFollowMeSuccess = createAction(
  FollowMeActionTypes.LoadFollowMeSuccess,
  props<{ items: IFollowMe[] }>()
);