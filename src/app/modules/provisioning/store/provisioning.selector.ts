import { createSelector } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { ProvisioningState } from './provisioning.reducer';
import { IProvisioning } from '../provisioning.model';

export const selectedState = (state: AppState) => state.provisioning;
export const filterProvisioningSelector = (keyword: string) => createSelector(
  selectedState,
  (state: ProvisioningState) => {
    const entities = Object.values(state.entities) as IProvisioning[];
    const results = entities.filter(p => p.device_label.toLowerCase().includes(keyword.toLowerCase()));
    return results && results.length > 0 ? results: [];
  }
);
export const getProvisioningsSelector = createSelector(
  selectedState,
  (state: ProvisioningState) => {
    return Object.values(state.entities);
  }
);
export const getProvisioningByIdSelector = (id: string | number) => createSelector(
  selectedState,
  (state: ProvisioningState) => state.entities[id]
);