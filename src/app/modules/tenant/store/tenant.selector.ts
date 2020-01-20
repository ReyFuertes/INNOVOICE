import { createSelector } from '@ngrx/store';
import * as fromTenant from './tenant.reducer';

export const selectFeature = (state) => state.tenant;
export const getTenantItemsSelector = createSelector(
  selectFeature,
  fromTenant.getItems
);
export const getTenantItemSelector = createSelector(
  selectFeature,
  fromTenant.getItem
);