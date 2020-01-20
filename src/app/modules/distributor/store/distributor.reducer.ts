import { createReducer, on, Action } from "@ngrx/store";
import { IDistributor } from '../models/distributor.model';
import { AddDistributor, AddDistributorSuccess, SetDistributor, LoadDistributorsSuccess, LoadDistributors } from './distributor.action';
import { EntityState, createEntityAdapter, EntityAdapter } from '@ngrx/entity';

export interface DistributorState extends EntityState<IDistributor> {
  item?: IDistributor,
  created?: boolean
}
export const distributorAdapter: EntityAdapter<IDistributor> = createEntityAdapter<IDistributor>({});
export const initialState: DistributorState = distributorAdapter.getInitialState({
  item: null,
  created: null
});
const distributorReducer = createReducer(
  initialState,
  on(LoadDistributors, (state) => {
    return ({ ...distributorAdapter.removeAll(state) })
  }),
  on(LoadDistributorsSuccess, (state, action) => {
    return ({ ...distributorAdapter.addAll(action.items, state) })
  }),
  on(SetDistributor, (state, action) => {
    return ({ ...state, item: action.item })
  }),
  on(AddDistributorSuccess, (state, action) => {
    return ({ ...state, created: action.created })
  })
);
export function DistributorReducer(state: DistributorState, action: Action) {
  return distributorReducer(state, action);
}

export const getItem = (state: DistributorState) => state.item;


