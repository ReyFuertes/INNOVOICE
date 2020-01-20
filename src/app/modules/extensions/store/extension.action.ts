import { createAction, props } from '@ngrx/store';
import { IExtension } from '../models/extension';

export enum ExtensionActionTypes {
  LoadExtension = '[Extension] Load',
  LoadExtensionSuccess = '[Extension] Load (success)',
  FindExtensionIndex = '[Extension] Find Index',
  FindExtensionIndexSuccess = '[Extension] Find Index (success)',
  UpdateExtension = '[Extension] Update',
  UpdateExtensionSuccess = '[Extension] Update (success)',
  AddExtension = '[Extension] Add',
  AddExtensionSuccess = '[Extension] Add (success)',
}

export const LoadExtension = createAction(
  ExtensionActionTypes.LoadExtension
);
export const LoadExtensionSuccess = createAction(
  ExtensionActionTypes.LoadExtensionSuccess,
  props<{ items: IExtension[] }>()
);
export const FindExtension = createAction(
  ExtensionActionTypes.FindExtensionIndex,
  props<{ id: string | number }>()
);
export const FindExtensionSuccess = createAction(
  ExtensionActionTypes.FindExtensionIndexSuccess,
  props<{ entity: IExtension }>()
);
export const UpdateExtension = createAction(
  ExtensionActionTypes.UpdateExtension,
  props<{ entity: IExtension }>()
);
export const UpdateExtensionSuccess = createAction(
  ExtensionActionTypes.UpdateExtensionSuccess,
  props<{ updated: boolean }>()
);
export const AddExtension = createAction(
  ExtensionActionTypes.UpdateExtension,
  props<{ entity: IExtension }>()
);
export const AddExtensionSuccess = createAction(
  ExtensionActionTypes.AddExtensionSuccess,
  props<{ created: boolean }>()
);