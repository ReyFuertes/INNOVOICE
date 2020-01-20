import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap, take } from 'rxjs/operators';
import { DeleteIvrMenu, LoadIvrMenuSuccess, LoadIvrMenu, FindIvrMenu, FindIvrMenuSuccess, UpdateIvrMenu, UpdateIvrMenuSuccess } from './ivr-menu.action';
import { IvrMenuService } from '../ivr-menu.services';
import { IIvrMenu } from '../models/ivr-menu.model';

@Injectable()
export class IvrMenuEffects {
  loadIvrMenu$ = createEffect(() => this.actions$.pipe(
    ofType(LoadIvrMenu),
    mergeMap(() => this.ivrMenuService.index().pipe(
      map((items: IIvrMenu[]) => {
        return LoadIvrMenuSuccess({ items });
      })
    ))
  ));
  findIvrMenu$ = createEffect(() => this.actions$.pipe(
    ofType(FindIvrMenu),
    mergeMap(({id}) => this.ivrMenuService.find(id).pipe(
      map((item: IIvrMenu) => {
        return FindIvrMenuSuccess({ item })
      })
    ))
  ));
  updateIvrMenu$ = createEffect(() => this.actions$.pipe(
    ofType(UpdateIvrMenu),
    mergeMap(({entity}) => this.ivrMenuService.update(entity).pipe(
      map((extension: IIvrMenu) => {
        //check if successfull
        return UpdateIvrMenuSuccess({ updated: true })
      })
    ))
  ));
  constructor(
    private actions$: Actions,
    private ivrMenuService: IvrMenuService
  ) { }
}