import { createAction, props } from '@ngrx/store';
import { IProvisioning } from '../provisioning.model';

export enum ProvisioningActionTypes {
  LoadProvisioning = '[Provisioning] Load',
  LoadProvisioningSuccess = '[Provisioning] Load (success)',
  DeleteProvisioning = '[Provisioning] remove',
  DeleteProvisioningSuccess = '[Provisioning] remove (success)',
  FindProvisioningIndex = '[Provisioning] Find Index',
  FindProvisioningIndexSuccess = '[Provisioning] Find Index (success)',
  UpdateProvisioning = '[Provisioning] Update',
  UpdateProvisioningSuccess = '[Provisioning] Update (success)',
}
export const UpdateProvisioningSuccess = createAction(
  ProvisioningActionTypes.UpdateProvisioningSuccess,
  props<{ updated: boolean }>()
);
export const UpdateProvisioning = createAction(
  ProvisioningActionTypes.UpdateProvisioning,
  props<{ entity: IProvisioning }>()
);
export const FindProvisioning = createAction(
  ProvisioningActionTypes.FindProvisioningIndex,
  props<{ id: string | number }>()
);
export const FindProvisioningSuccess = createAction(
  ProvisioningActionTypes.FindProvisioningIndexSuccess,
  props<{ item: IProvisioning }>()
);
export const LoadProvisioning = createAction(
  ProvisioningActionTypes.LoadProvisioning,
);
export const LoadProvisioningSuccess = createAction(
  ProvisioningActionTypes.LoadProvisioningSuccess,
  props<{ items: IProvisioning[] }>()
);
export const DeleteProvisioning = createAction(
  ProvisioningActionTypes.DeleteProvisioning,
  props<{ id: number }>()
);
export const DeleteProvisioningSuccess = createAction(
  ProvisioningActionTypes.DeleteProvisioningSuccess,
  props<{ deleted: boolean }>()
);