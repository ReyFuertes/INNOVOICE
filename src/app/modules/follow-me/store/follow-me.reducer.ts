import { createReducer, on, Action } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { LoadFollowMe, LoadFollowMeSuccess } from './follow-me.action';
import { IFollowMe } from '../follow-me.model';

export interface FollowMeState extends EntityState<IFollowMe> {
  item?: IFollowMe
}
export const followMeAdapter: EntityAdapter<IFollowMe> = createEntityAdapter<IFollowMe>({});
export const initialState: FollowMeState = followMeAdapter.getInitialState({
  item: null,
});
const followMeReducer = createReducer(
  initialState,
  on(LoadFollowMe, (state) => {
    return ({ ...followMeAdapter.removeAll(state) })
  }),
  on(LoadFollowMeSuccess, (state, action) => {
    return ({ ...followMeAdapter.addAll(action.items, state) })
  }),
);
export function FollowMeReducer(state: FollowMeState, action: Action) {
  return followMeReducer(state, action);
}

