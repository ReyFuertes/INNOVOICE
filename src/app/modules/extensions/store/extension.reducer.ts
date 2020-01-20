import { createReducer, on, Action } from "@ngrx/store";
import { LoadExtension, LoadExtensionSuccess, FindExtensionSuccess } from './extension.action';
import { IExtension } from '../models/extension';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface ExtensionState extends EntityState<IExtension> {
  item?: IExtension
}
export const extensionAdapter: EntityAdapter<IExtension> = createEntityAdapter<IExtension>({});
export const initialState: ExtensionState = extensionAdapter.getInitialState({
  item: null,
});
const extensionReducer = createReducer(
  initialState,
  on(LoadExtension, (state) => {
    return ({ ...extensionAdapter.removeAll(state) })
  }),
  on(LoadExtensionSuccess, (state, action) => {
    return ({ ...extensionAdapter.addAll(action.items, state) })
  }),
);
export function ExtensionReducer(state: ExtensionState, action: Action) {
  return extensionReducer(state, action);
}