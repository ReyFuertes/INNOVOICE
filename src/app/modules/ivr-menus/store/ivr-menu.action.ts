import { createAction, props } from '@ngrx/store';
import { IIvrMenu } from '../models/ivr-menu.model';

export enum IvrMenuActionTypes {
  LoadIvrMenu = '[IvrMenu] Load',
  LoadIvrMenuSuccess = '[IvrMenu] Load (success)',
  DeleteIvrMenu = '[IvrMenu] remove',
  DeleteIvrMenuSuccess = '[IvrMenu] remove (success)',
  FindIvrMenuIndex = '[IvrMenu] Find Index',
  FindIvrMenuIndexSuccess = '[IvrMenu] Find Index (success)',
  UpdateIvrMenu = '[IvrMenu] Update',
  UpdateIvrMenuSuccess = '[IvrMenu] Update (success)',
}
export const UpdateIvrMenuSuccess = createAction(
  IvrMenuActionTypes.UpdateIvrMenuSuccess,
  props<{ updated: boolean }>()
);
export const UpdateIvrMenu = createAction(
  IvrMenuActionTypes.UpdateIvrMenu,
  props<{ entity: IIvrMenu }>()
);
export const FindIvrMenu = createAction(
  IvrMenuActionTypes.FindIvrMenuIndex,
  props<{ id: string | number }>()
);
export const FindIvrMenuSuccess = createAction(
  IvrMenuActionTypes.FindIvrMenuIndexSuccess,
  props<{ item: IIvrMenu }>()
);
export const LoadIvrMenu = createAction(
  IvrMenuActionTypes.LoadIvrMenu,
);
export const LoadIvrMenuSuccess = createAction(
  IvrMenuActionTypes.LoadIvrMenuSuccess,
  props<{ items: IIvrMenu[] }>()
);
export const DeleteIvrMenu = createAction(
  IvrMenuActionTypes.DeleteIvrMenu,
  props<{ id: number }>()
);
export const DeleteIvrMenuSuccess = createAction(
  IvrMenuActionTypes.DeleteIvrMenuSuccess,
  props<{ deleted: boolean }>()
);