import { createAction, props } from '@ngrx/store';
import { IInboundNumber } from '../models/inbound.number';

export enum DdiManagerActionTypes {
  LoadDdiManager = '[DdiManager] Load',
  LoadDdiManagerSuccess = '[DdiManager] Load (success)',
  FindDdiManagerIndex = '[DdiManager] Find Index',
  FindDdiManagerIndexSuccess = '[DdiManager] Find Index (success)',
  UpdateDdiManager = '[DdiManager] Update',
  UpdateDdiManagerSuccess = '[DdiManager] Update (success)',
  AddDdiManager = '[DdiManager] Add',
  AddDdiManagerSuccess = '[DdiManager] Add (success)',
}

export const LoadDdiManager = createAction(
  DdiManagerActionTypes.LoadDdiManager
);
export const LoadDdiManagerSuccess = createAction(
  DdiManagerActionTypes.LoadDdiManagerSuccess,
  props<{ items: IInboundNumber[] }>()
);
export const FindDdiManager = createAction(
  DdiManagerActionTypes.FindDdiManagerIndex,
  props<{ id: string | number }>()
);
export const FindDdiManagerSuccess = createAction(
  DdiManagerActionTypes.FindDdiManagerIndexSuccess,
  props<{ item: IInboundNumber }>()
);
export const UpdateDdiManager = createAction(
  DdiManagerActionTypes.UpdateDdiManager,
  props<{ entity: IInboundNumber }>()
);
export const UpdateDdiManagerSuccess = createAction(
  DdiManagerActionTypes.UpdateDdiManagerSuccess,
  props<{ updated: boolean }>()
);
export const AddDdiManager = createAction(
  DdiManagerActionTypes.UpdateDdiManager,
  props<{ entity: IInboundNumber }>()
);
export const AddDdiManagerSuccess = createAction(
  DdiManagerActionTypes.AddDdiManagerSuccess,
  props<{ created: boolean }>()
);