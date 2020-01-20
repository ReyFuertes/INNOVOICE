import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap, take } from 'rxjs/operators';
import { DeleteGreeting } from '../actions/greetings.action';

@Injectable()
export class GreetingEffects {

  constructor(
    private actions$: Actions,
  ) { }
}