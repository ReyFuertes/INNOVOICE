import { createSelector } from '@ngrx/store';
import { UserState } from './user.reducer';
import { IUser } from '../user.model';

export const selectedState = (state) => state.musicOnHold;
export const filterUserSelector = (keyword: string) => createSelector(
  selectedState,
  (state: UserState) => {
    const entities = Object.values(state.entities) as IUser[];
    const results = entities.filter(p => p.description.toLowerCase().includes(keyword.toLowerCase()));
    return results && results.length > 0 ? results: [];
  }
);
export const getUserItemsSelector = createSelector(
  selectedState,
  (state: UserState) => {
    return Object.values(state.entities);
  }
);
export const getUserItemSelector = (id: string | number) => createSelector(
  selectedState,
  (state: UserState) => state.entities[id]
);