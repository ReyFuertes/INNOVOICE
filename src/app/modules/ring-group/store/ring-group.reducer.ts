import { createReducer, on, Action } from "@ngrx/store";
import { LoadRingGroupSuccess, FindRingGroupSuccess, LoadRingGroup } from './ring-group.action';
import { IRingGroup } from '../models/ring-group.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface RingGroupState extends EntityState<IRingGroup> {
  item?: IRingGroup
}
export const ringGroupAdapter: EntityAdapter<IRingGroup> = createEntityAdapter<IRingGroup>({});
export const initialState: RingGroupState = ringGroupAdapter.getInitialState({
  item: null,
});
const ringGroupReducer = createReducer(
  initialState,
  on(LoadRingGroup, (state) => {
    return ({ ...ringGroupAdapter.removeAll(state) })
  }),
  on(LoadRingGroupSuccess, (state, action) => {
    return ({ ...ringGroupAdapter.addAll(action.items, state) })
  }),
);
export function RingGroupReducer(state: RingGroupState, action: Action) {
  return ringGroupReducer(state, action);
}