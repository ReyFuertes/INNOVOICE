import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { DdiManagerState } from './ddi-manager.reducer';
import { IInboundNumber } from '../models/inbound.number';

export const selectedState = (state: AppState) => state.ddiManager;
export const filterDdiManagerelector = (keyword: string) => createSelector(
  selectedState,
  (state: DdiManagerState) => {
    const entities = Object.values(state.entities) as IInboundNumber[];
    const results = entities.filter(p =>
      p.description.toLowerCase().includes(keyword.toLowerCase()) ||
      p.number.includes(keyword)
    );
    return results && results.length > 0 ? results : [];
  }
);
export const getDdiManagersSelector = createSelector(
  selectedState,
  (state: DdiManagerState) => {
    return Object.values(state.entities);
  }
);
export const getDdiManagerByIdSelector = (id: string | number) => createSelector(
  selectedState,
  (state: DdiManagerState) => state.entities[id]
);