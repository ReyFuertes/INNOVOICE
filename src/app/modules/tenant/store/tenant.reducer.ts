import { createReducer, on, Action } from "@ngrx/store";
import { LoadTenantSuccess, SetTenant, AddTenantSuccess } from './tenant.action';
import { ITenant } from '../models/tenant.model';

export interface TenantState {
  items?: ITenant[],
  item?: ITenant,
  created?: boolean
}
const initialState: TenantState = {
  items: null,
  item: null,
  created: null
};
const resellerReducer = createReducer(
  initialState,
  on(LoadTenantSuccess, (state, action) => {
    return ({ ...state, items: action.items })
  }),
  on(SetTenant, (state, action) => {
    return ({ ...state, item: action.item })
  }),
  on(AddTenantSuccess, (state, action) => {
    return ({ ...state, created: action.created })
  })
);
export function TenantReducer(state: TenantState, action: Action) {
  return resellerReducer(state, action);
}
export const getItems = (state: TenantState) => state.items;
export const getItem = (state: TenantState) =>  state.item;