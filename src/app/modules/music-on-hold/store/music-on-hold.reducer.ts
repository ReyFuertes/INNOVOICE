import { createReducer, on, Action } from "@ngrx/store";
import { IMusicOnHold } from '../models/music-on-hold.model';
import { LoadMusicOnHoldSuccess, LoadMusicOnHold } from './music-on-hold.action';
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';

export interface MusicOnHoldState extends EntityState<IMusicOnHold> {
  item?: IMusicOnHold
}
export const musicOnHoldAdapter: EntityAdapter<IMusicOnHold> = createEntityAdapter<IMusicOnHold>({});
export const initialState: MusicOnHoldState = musicOnHoldAdapter.getInitialState({
  item: null,
});
const musicOnHoldReducer = createReducer(
  initialState,
  on(LoadMusicOnHold, (state) => {
    return ({ ...musicOnHoldAdapter.removeAll(state) })
  }),
  on(LoadMusicOnHoldSuccess, (state, action) => {
    return ({ ...musicOnHoldAdapter.addAll(action.items, state) })
  }),
);
export function MusicOnHoldReducer(state: MusicOnHoldState, action: Action) {
  return musicOnHoldReducer(state, action);
}
