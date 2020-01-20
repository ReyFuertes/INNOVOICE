import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LoadDdiManager, LoadDdiManagerSuccess, FindDdiManagerSuccess, FindDdiManager } from './ddi-manager.action';
import { IInboundNumber } from '../models/inbound.number';
import { InboundNumbersService } from '../services/inboundnumbers.service';

@Injectable()
export class DdiManagerEffects {
  loadIDdiManager$ = createEffect(() => this.actions$.pipe(
    ofType(LoadDdiManager),
    mergeMap(() => this.inboundNumbersService.index().pipe(
      map((items: IInboundNumber[]) => {
        return LoadDdiManagerSuccess({ items })
      })
    ))
  ));
  findDdiManager$ = createEffect(() => this.actions$.pipe(
    ofType(FindDdiManager),
    mergeMap(({ id }) => this.inboundNumbersService.find(id).pipe(
      map((item: IInboundNumber) => {
        return FindDdiManagerSuccess({ item })
      })
    ))
  ));
  constructor(
    private actions$: Actions,
    private inboundNumbersService: InboundNumbersService
  ) { }
}