import { createReducer, on, Action } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { IIvrMenu } from '../models/ivr-menu.model';
import { LoadIvrMenu, LoadIvrMenuSuccess } from './ivr-menu.action';

export interface IvrMenuState extends EntityState<IIvrMenu> {
  item?: IIvrMenu
}
export const ivrMenuAdapter: EntityAdapter<IIvrMenu> = createEntityAdapter<IIvrMenu>({});
export const initialState: IvrMenuState = ivrMenuAdapter.getInitialState({
  item: null,
});
const ivrMenuReducer = createReducer(
  initialState,
  on(LoadIvrMenu, (state) => {
    return ({ ...ivrMenuAdapter.removeAll(state) })
  }),
  on(LoadIvrMenuSuccess, (state, action) => {
    return ({ ...ivrMenuAdapter.addAll(action.items, state) })
  }),
);
export function IvrMenuReducer(state: IvrMenuState, action: Action) {
  return ivrMenuReducer(state, action);
}

