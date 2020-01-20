import { createReducer, on, Action } from "@ngrx/store";
import { LoadDdiManagerSuccess, LoadDdiManager } from './ddi-manager.action';
import { IInboundNumber } from '../models/inbound.number';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface DdiManagerState extends EntityState<IInboundNumber> {
  item?: IInboundNumber
}
export const ddiManagerAdapter: EntityAdapter<IInboundNumber> = createEntityAdapter<IInboundNumber>({});
export const initialState: DdiManagerState = ddiManagerAdapter.getInitialState({
  item: null,
});
const ddiManagerReducer = createReducer(
  initialState,
  on(LoadDdiManager, (state) => {
    return ({ ...ddiManagerAdapter.removeAll(state) })
  }),
  on(LoadDdiManagerSuccess, (state, action) => {
    return ({ ...ddiManagerAdapter.addAll(action.items, state) })
  }),
);
export function DdiManagerReducer(state: DdiManagerState, action: Action) {
  return ddiManagerReducer(state, action);
}