import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { RingGroupState } from './ring-group.reducer';
import { IRingGroup } from '../models/ring-group.model';

export const selectedState = (state: AppState) => state.ringGroup;
export const filterRingGroupSelector = (keyword: string) => createSelector(
  selectedState,
  (state: RingGroupState) => {
    const entities = Object.values(state.entities) as IRingGroup[];
    const results = entities.filter(p => p.description.toLowerCase().includes(keyword.toLowerCase()));
    return results && results.length > 0 ? results: [];
  }
);
export const getRingGroupsSelector = createSelector(
  selectedState,
  (state: RingGroupState) => {
    return Object.values(state.entities);
  }
);
export const getRingGroupByIdSelector = (id: string | number) => createSelector(
  selectedState,
  (state: RingGroupState) => state.entities[id]
);