import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap, take } from 'rxjs/operators';
import { LoadUsers, LoadUsersSuccess } from './user.action';
import { UserService } from '../user.service';
import { IUser } from '../user.model';

@Injectable()
export class UserEffects {
  loadUser$ = createEffect(() => this.actions$.pipe(
    ofType(LoadUsers),
    mergeMap(() => this.userService.index().pipe(
      map((items: IUser[]) => {
        return LoadUsersSuccess({ items });
      })
    ))
  ));

  constructor(
    private actions$: Actions,
    private userService: UserService
  ) { }
}