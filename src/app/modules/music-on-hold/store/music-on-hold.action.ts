import { createAction, props } from '@ngrx/store';
import { IMusicOnHold } from '../models/music-on-hold.model';

export enum MusicOnHoldActionTypes {
  LoadMusicOnHold = '[MusicOnHold] Load',
  LoadMusicOnHoldSuccess = '[MusicOnHold] Load (success)'
}
export const LoadMusicOnHold = createAction(
  MusicOnHoldActionTypes.LoadMusicOnHold,
);
export const LoadMusicOnHoldSuccess = createAction(
  MusicOnHoldActionTypes.LoadMusicOnHoldSuccess,
  props<{ items: IMusicOnHold[] }>()
);