import { createReducer, on, Action } from "@ngrx/store";
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';
import { DeleteGreetingSuccess } from '../actions/greetings.action';
import { IGreeting } from '../../models/greeting.model';

export interface GreetingState extends EntityState<IGreeting> {
  item?: IGreeting
}
export const voiceMailAdapter: EntityAdapter<IGreeting> = createEntityAdapter<IGreeting>({});
export const initialState: GreetingState = voiceMailAdapter.getInitialState({
  item: null,
});
const greetingReducer = createReducer(
  initialState
);
export function GreetingReducer(state: GreetingState, action: Action) {
  return greetingReducer(state, action);
}

