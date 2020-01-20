import { createSelector } from '@ngrx/store';
import * as fromReseller from './reseller.reducer';

export const selectFeature = (state) => state.reseller;
export const getResellerItemsSelector = createSelector(
  selectFeature,
  fromReseller.getItems
);
export const getResellerItemSelector = createSelector(
  selectFeature,
  fromReseller.getItem
);