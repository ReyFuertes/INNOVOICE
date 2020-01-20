import { createReducer, on, Action } from "@ngrx/store";
import { LoadResellerSuccess, SetReseller, AddReseller, AddResellerSuccess } from './reseller.action';
import { IReseller } from '../models/reseller.model';

export interface ResellerState {
  items?: IReseller[],
  item?: IReseller,
  created?: boolean
}
const initialState: ResellerState = {
  items: null,
  item: null,
  created: null
};
const resellerReducer = createReducer(
  initialState,
  on(LoadResellerSuccess, (state, action) => {
    return ({ ...state, items: action.items })
  }),
  on(SetReseller, (state, action) => {
    return ({ ...state, item: action.item })
  }),
  on(AddReseller, (state, action) => {
    return ({ ...state, item: action.item })
  }),
  on(AddResellerSuccess, (state, action) => {
    return ({ ...state, created: action.created })
  })
);
export function ResellerReducer(state: ResellerState, action: Action) {
  return resellerReducer(state, action);
}
export const getItems = (state: ResellerState) => state.items;
export const getItem = (state: ResellerState) => state.item;
