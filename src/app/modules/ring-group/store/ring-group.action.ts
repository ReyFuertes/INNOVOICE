import { createAction, props } from '@ngrx/store';
import { IRingGroup } from '../models/ring-group.model';

export enum RingGroupActionTypes {
  LoadRingGroup = '[RingGroup] Load',
  LoadRingGroupSuccess = '[RingGroup] Load (success)',
  FindRingGroupIndex = '[RingGroup] Find Index',
  FindRingGroupIndexSuccess = '[RingGroup] Find Index (success)',
  UpdateRingGroup = '[RingGroup] Update',
  UpdateRingGroupSuccess = '[RingGroup] Update (success)',
  AddRingGroup = '[RingGroup] Add',
  AddRingGroupSuccess = '[RingGroup] Add (success)',
}

export const LoadRingGroup = createAction(
  RingGroupActionTypes.LoadRingGroup
);
export const LoadRingGroupSuccess = createAction(
  RingGroupActionTypes.LoadRingGroupSuccess,
  props<{ items: IRingGroup[] }>()
);
export const FindRingGroup = createAction(
  RingGroupActionTypes.FindRingGroupIndex,
  props<{ id: string | number }>()
);
export const FindRingGroupSuccess = createAction(
  RingGroupActionTypes.FindRingGroupIndexSuccess,
  props<{ item: IRingGroup }>()
);
export const UpdateRingGroup = createAction(
  RingGroupActionTypes.UpdateRingGroup,
  props<{ entity: IRingGroup }>()
);
export const UpdateRingGroupSuccess = createAction(
  RingGroupActionTypes.UpdateRingGroupSuccess,
  props<{ updated: boolean }>()
);
export const AddRingGroup = createAction(
  RingGroupActionTypes.UpdateRingGroup,
  props<{ entity: IRingGroup }>()
);
export const AddRingGroupSuccess = createAction(
  RingGroupActionTypes.AddRingGroupSuccess,
  props<{ created: boolean }>()
);