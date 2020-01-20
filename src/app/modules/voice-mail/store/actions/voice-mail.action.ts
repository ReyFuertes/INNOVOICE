import { createAction, props } from '@ngrx/store';
import { IVoiceMail } from '../../models/voice-mail.model';

export enum VoiceMailActionTypes {
  LoadVoiceMail = '[VoiceMail] Load',
  LoadVoiceMailSuccess = '[VoiceMail] Load (success)',
  FindVoiceMailIndex = '[VoiceMail] Find Index',
  FindVoiceMailIndexSuccess = '[VoiceMail] Find Index (success)',
  UpdateVoiceMail = '[VoiceMail] Update',
  UpdateVoiceMailSuccess = '[VoiceMail] Update (success)',
  AddVoiceMail = '[VoiceMail] Add',
  AddVoiceMailSuccess = '[VoiceMail] Add (success)',
  RemoveVoiceMail = '[VoiceMail] remove',
}
export const LoadVoiceMail = createAction(
  VoiceMailActionTypes.LoadVoiceMail,
);
export const LoadVoiceMailSuccess = createAction(
  VoiceMailActionTypes.LoadVoiceMailSuccess,
  props<{ items: IVoiceMail[] }>()
);
export const FindVoiceMail = createAction(
  VoiceMailActionTypes.FindVoiceMailIndex,
  props<{ id: string | number }>()
);
export const FindVoiceMailSuccess = createAction(
  VoiceMailActionTypes.FindVoiceMailIndexSuccess,
  props<{ item: IVoiceMail }>()
);
export const UpdateVoiceMail = createAction(
  VoiceMailActionTypes.UpdateVoiceMail,
  props<{ entity: IVoiceMail }>()
);
export const UpdateVoiceMailSuccess = createAction(
  VoiceMailActionTypes.UpdateVoiceMailSuccess,
  props<{ updated: boolean }>()
);
export const AddVoiceMail = createAction(
  VoiceMailActionTypes.UpdateVoiceMail,
  props<{ entity: IVoiceMail }>()
);
export const AddVoiceMailSuccess = createAction(
  VoiceMailActionTypes.AddVoiceMailSuccess,
  props<{ created: boolean }>()
);
export const RemoveVoiceMail = createAction(
  VoiceMailActionTypes.RemoveVoiceMail,
  props<{ id: number }>()
);