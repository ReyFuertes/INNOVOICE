import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { FollowMeService } from '../follow-me.service';
import { LoadFollowMeSuccess, LoadFollowMe } from './follow-me.action';
import { IFollowMe } from '../follow-me.model';

@Injectable()
export class FollowMeEffects {
  loadFollowMe$ = createEffect(() => this.actions$.pipe(
    ofType(LoadFollowMe),
    mergeMap(() => this.followMeService.index().pipe(
      map((items: IFollowMe[]) => {
        return LoadFollowMeSuccess({ items });
      })
    ))
  ));
  constructor(
    private actions$: Actions,
    private followMeService: FollowMeService
  ) { }
}