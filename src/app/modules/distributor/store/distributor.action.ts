import { createAction, props } from '@ngrx/store';
import { IDistributor } from '../models/distributor.model';

export enum DistributorActionTypes {
  LoadDistributors = '[Distributor] Load',
  LoadDistributorsSuccess = '[Distributor] Load (success)',
  SetDistributor = '[Distributor] Set',
  AddDistributor = '[Distributor] Add',
  AddDistributorSuccess = '[Distributor] Add (success)',
  GetDistributorReseller = '[Distributor Reseller] Get',
  GetDistributorResellerSuccess = '[Distributor Reseller] Get (success)',
}
export const GetDistributorReseller = createAction(
  DistributorActionTypes.GetDistributorReseller,
);
export const GetDistributorResellersSuccess = createAction(
  DistributorActionTypes.GetDistributorResellerSuccess,
  props<{ items: IDistributor[] }>()
);
export const LoadDistributors = createAction(
  DistributorActionTypes.LoadDistributors,
);
export const LoadDistributorsSuccess = createAction(
  DistributorActionTypes.LoadDistributorsSuccess,
  props<{ items: IDistributor[] }>()
);
export const SetDistributor = createAction(
  DistributorActionTypes.SetDistributor,
  props<{ item: IDistributor }>()
);
export const AddDistributor = createAction(
  DistributorActionTypes.AddDistributor,
  props<{ item: IDistributor }>()
);
export const AddDistributorSuccess = createAction(
  DistributorActionTypes.AddDistributorSuccess,
  props<{ created: boolean }>()
);