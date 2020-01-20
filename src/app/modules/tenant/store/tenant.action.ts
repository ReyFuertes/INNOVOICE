import { createAction, props } from '@ngrx/store';
import { ITenant } from '../../tenant/models/tenant.model';

export enum TenantActionTypes {
  LoadTenant = '[Tenant] Load',
  LoadTenantSuccess = '[Tenant] Load (success)',
  SetTenant = '[Tenant] Set',
  AddTenant = '[Tenant] Add',
  AddTenantSuccess = '[Tenant] Add (success)',
}
export const LoadTenant = createAction(
  TenantActionTypes.LoadTenant,
);
export const LoadTenantSuccess = createAction(
  TenantActionTypes.LoadTenantSuccess,
  props<{ items: ITenant[] }>()
);
export const SetTenant = createAction(
  TenantActionTypes.SetTenant,
  props<{ item: ITenant }>()
);
export const AddTenant = createAction(
  TenantActionTypes.AddTenant,
  props<{ item: ITenant }>()
);
export const AddTenantSuccess = createAction(
  TenantActionTypes.AddTenantSuccess,
  props<{ created: boolean }>()
);