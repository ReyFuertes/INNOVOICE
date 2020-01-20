import { createReducer, on, Action } from "@ngrx/store";
import { LoadVoiceMailSuccess, LoadVoiceMail, RemoveVoiceMail } from '../actions/voice-mail.action';
import { IVoiceMail } from '../../models/voice-mail.model';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface VoiceMailState extends EntityState<IVoiceMail> {
  item?: IVoiceMail
}
export const voiceMailAdapter: EntityAdapter<IVoiceMail> = createEntityAdapter<IVoiceMail>({});
export const initialState: VoiceMailState = voiceMailAdapter.getInitialState({
  item: null,
});
const voiceMailReducer = createReducer(
  initialState,
  on(LoadVoiceMail, (state) => {
    return ({ ...voiceMailAdapter.removeAll(state) })
  }),
  on(LoadVoiceMailSuccess, (state, action) => {
    return ({ ...voiceMailAdapter.addAll(action.items, state), })
  })
);
export function VoiceMailReducer(state: VoiceMailState, action: Action) {
  return voiceMailReducer(state, action);
}


