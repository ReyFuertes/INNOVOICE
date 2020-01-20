import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { FollowMeState } from './follow-me.reducer';
import { IFollowMe } from '../follow-me.model';

export const selectedState = (state: AppState) => state.followMe;
export const filterFollowMeSelector = (keyword: string) => createSelector(
  selectedState,
  (state: FollowMeState) => {
    const entities = Object.values(state.entities) as IFollowMe[];
    const results = entities.filter(p => p.description.toLowerCase().includes(keyword.toLowerCase()));
    return results && results.length > 0 ? results: [];
  }
);
export const getFollowMesSelector = createSelector(
  selectedState,
  (state: FollowMeState) => {
    return Object.values(state.entities);
  }
);