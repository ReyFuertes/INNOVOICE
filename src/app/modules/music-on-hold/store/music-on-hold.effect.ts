import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap, take } from 'rxjs/operators';
import {  LoadMusicOnHold, LoadMusicOnHoldSuccess} from './music-on-hold.action';
import { IMusicOnHold } from '../models/music-on-hold.model';
import { MusicOnHoldService } from '../services/music-on-hold.service';

@Injectable()
export class MusicOnHoldEffects {
  loadMusicOnHold$ = createEffect(() => this.actions$.pipe(
    ofType(LoadMusicOnHold),
    mergeMap(() => this.musicOnHoldsService.index().pipe(
      map((items: IMusicOnHold[]) => {
        return LoadMusicOnHoldSuccess({ items });
      })
    ))
  ));

  constructor(
    private actions$: Actions,
    private musicOnHoldsService: MusicOnHoldService
  ) { }
}