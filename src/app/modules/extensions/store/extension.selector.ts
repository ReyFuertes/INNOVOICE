import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { ExtensionState } from './extension.reducer';
import { IExtension } from '../models/extension';

export const selectedState = (state: AppState) => state.extension;
export const filterExtensionSelector = (keyword: string) => createSelector(
  selectedState,
  (state: ExtensionState) => {
    const entities = Object.values(state.entities) as IExtension[];
    const results = entities.filter(p => p.description.toLowerCase().includes(keyword.toLowerCase()));
    return results && results.length > 0 ? results : [];
  }
);
export const getExtensionsSelector = createSelector(
  selectedState,
  (state: ExtensionState) => Object.values(state.entities)
);
export const getExtensionByIdSelector = (id: string | number) => createSelector(
  selectedState,
  (state: ExtensionState) => state.entities[id]
);