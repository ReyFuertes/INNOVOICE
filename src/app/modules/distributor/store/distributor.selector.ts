import { createSelector } from '@ngrx/store';
import * as fromDistributor from './distributor.reducer'
import { AppState } from 'src/app/store/app.reducer';

export const selectedState = (state: AppState) => state.distributor;
export const getDistributorItemsSelector = createSelector(
  selectedState,
  (state: fromDistributor.DistributorState) => Object.values(state.entities)
);
export const getDistributorItemSelector = createSelector(
  selectedState,
  fromDistributor.getItem
);