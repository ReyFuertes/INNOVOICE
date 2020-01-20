import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of, Observable } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { LoadRingGroup, LoadRingGroupSuccess, FindRingGroup, FindRingGroupSuccess, UpdateRingGroup, UpdateRingGroupSuccess, AddRingGroupSuccess } from './ring-group.action';
import { IRingGroup } from '../models/ring-group.model';
import { RingGroupService } from '../services/ring-group.service';
@Injectable()
export class RingGroupEffects {
  loadRingGroup$ = createEffect(() => this.actions$.pipe(
    ofType(LoadRingGroup),
    mergeMap(() => this.RingGroupService.index().pipe(
      map((items: IRingGroup[]) => {
        return LoadRingGroupSuccess({ items })
      })
    ))
  ));
  findRingGroup$ = createEffect(() => this.actions$.pipe(
    ofType(FindRingGroup),
    mergeMap(({id}) => this.RingGroupService.find(id).pipe(
      map((item: IRingGroup) => {
        return FindRingGroupSuccess({ item })
      })
    ))
  ));
  updateRingGroup$ = createEffect(() => this.actions$.pipe(
    ofType(UpdateRingGroup),
    mergeMap(({entity}) => this.RingGroupService.update(entity).pipe(
      map((RingGroup: IRingGroup) => {
        //check if successfull
        return UpdateRingGroupSuccess({ updated: true })
      })
    ))
  ));
  addRingGroup$ = createEffect(() => this.actions$.pipe(
    ofType(UpdateRingGroup),
    mergeMap(({entity}) => this.RingGroupService.create(entity).pipe(
      map((entity: IRingGroup) => {
        //check if successfull
        return AddRingGroupSuccess({ created: true })
      })
    ))
  ));
  constructor(
    private actions$: Actions,
    private RingGroupService: RingGroupService
  ) { }
}