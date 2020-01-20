import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { IvrMenuState } from './ivr-menu.reducer';
import { IIvrMenu } from '../models/ivr-menu.model';

export const selectedState = (state: AppState) => state.ivrMenu;
export const filterIvrMenuSelector = (keyword: string) => createSelector(
  selectedState,
  (state: IvrMenuState) => {
    const entities = Object.values(state.entities) as IIvrMenu[];
    const results = entities.filter(p => p.description.toLowerCase().includes(keyword.toLowerCase()));
    return results && results.length > 0 ? results: [];
  }
);
export const getIvrMenusSelector = createSelector(
  selectedState,
  (state: IvrMenuState) => {
    return Object.values(state.entities);
  }
);
export const getIvrMenuByIdSelector = (id: string | number) => createSelector(
  selectedState,
  (state: IvrMenuState) => state.entities[id]
);