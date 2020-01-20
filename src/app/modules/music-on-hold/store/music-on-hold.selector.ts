import { createSelector } from '@ngrx/store';
import { MusicOnHoldState } from './music-on-hold.reducer';
import { IMusicOnHold } from '../models/music-on-hold.model';

export const selectedState = (state) => state.musicOnHold;
export const filterMusicOnHoldSelector = (keyword: string) => createSelector(
  selectedState,
  (state: MusicOnHoldState) => {
    const entities = Object.values(state.entities) as IMusicOnHold[];
    const results = entities.filter(p => p.description.toLowerCase().includes(keyword.toLowerCase()));
    return results && results.length > 0 ? results: [];
  }
);
export const getMusicOnHoldItemsSelector = createSelector(
  selectedState,
  (state: MusicOnHoldState) => {
    return Object.values(state.entities);
  }
);
export const getMusicOnHoldItemSelector = (id: string | number) => createSelector(
  selectedState,
  (state: MusicOnHoldState) => state.entities[id]
);