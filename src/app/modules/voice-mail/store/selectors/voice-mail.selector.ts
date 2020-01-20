import { createSelector } from '@ngrx/store';
import { VoiceMailState } from '../reducers/voice-mail.reducer';
import { AppState } from 'src/app/store/app.reducer';
import { IVoiceMail } from '../../models/voice-mail.model';

export const selectedState = (state: AppState) => state.voiceMail;
export const filterVoicemailSelector = (keyword: string) => createSelector(
  selectedState,
  (state: VoiceMailState) => {
    const entities = Object.values(state.entities) as IVoiceMail[];
    const results = entities.filter(p => p.description.toLowerCase().includes(keyword.toLowerCase()));
    return results && results.length > 0 ? results: [];
  }
);
export const getVoiceMailsSelector = createSelector(
  selectedState,
  (state: VoiceMailState) => {
    return Object.values(state.entities);
  }
);
export const getVoiceMailByIdSelector = (id: string | number) => createSelector(
  selectedState,
  (state: VoiceMailState) => state.entities[id]
);