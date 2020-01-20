import { createAction, props } from '@ngrx/store';

export enum GreetingActionTypes {
  DeleteGreeting = '[Greeting] remove',
  DeleteGreetingSuccess = '[Greeting] remove (success)'
}

export const DeleteGreeting = createAction(
  GreetingActionTypes.DeleteGreeting,
  props<{ id: number }>()
);
export const DeleteGreetingSuccess = createAction(
  GreetingActionTypes.DeleteGreetingSuccess,
  props<{ deleted: boolean }>()
);