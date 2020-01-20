import { createAction, props } from '@ngrx/store';
import { IReseller } from '../models/reseller.model';

export enum ResellerActionTypes {
  LoadReseller = '[Reseller] Load',
  LoadResellerSuccess = '[Reseller] Load (success)',
  SetReseller = '[Reseller] Set',
  AddReseller = '[Reseller] Add',
  AddResellerSuccess = '[Reseller] Add (success)'
}
export const LoadReseller = createAction(
  ResellerActionTypes.LoadReseller,
);
export const LoadResellerSuccess = createAction(
  ResellerActionTypes.LoadResellerSuccess,
  props<{ items: IReseller[] }>()
);
export const SetReseller = createAction(
  ResellerActionTypes.SetReseller,
  props<{ item: IReseller }>()
);
export const AddReseller = createAction(
  ResellerActionTypes.AddReseller,
  props<{ item: IReseller }>()
);
export const AddResellerSuccess = createAction(
  ResellerActionTypes.AddResellerSuccess,
  props<{ created: boolean }>()
);