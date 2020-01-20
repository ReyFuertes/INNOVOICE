import { createReducer, on, Action } from "@ngrx/store";
import { EntityAdapter, EntityState, createEntityAdapter } from '@ngrx/entity';
import { LoadUsersSuccess, LoadUsers } from './user.action';
import { IUser } from '../user.model';

export interface UserState extends EntityState<IUser> {
  item?: IUser
}
export const userAdapter: EntityAdapter<IUser> = createEntityAdapter<IUser>({});
export const initialState: UserState = userAdapter.getInitialState({
  item: null,
});
const userReducer = createReducer(
  initialState,
  on(LoadUsers, (state) => {
    return ({ ...userAdapter.removeAll(state) })
  }),
  on(LoadUsersSuccess, (state, action) => {
    return ({ ...userAdapter.addAll(action.items, state) })
  }),
);
export function UserReducer(state: UserState, action: Action) {
  return userReducer(state, action);
}
