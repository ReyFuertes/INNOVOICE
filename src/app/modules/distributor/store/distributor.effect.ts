import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap, take } from 'rxjs/operators';
import { AddDistributor, AddDistributorSuccess, LoadDistributors, LoadDistributorsSuccess, SetDistributor, GetDistributorReseller, GetDistributorResellersSuccess } from './distributor.action';
import { DistributorsService } from '../service/distributor.service';
import { IDistributor } from '../models/distributor.model';
@Injectable()
export class DistributorEffects {
  getDistributorsResellers$ = createEffect(() => this.actions$.pipe(
    ofType(GetDistributorReseller),
    mergeMap(() => this.distributorsService.index().pipe(
      map((items: any) => {
        return GetDistributorResellersSuccess({ items });
      })
    ))
  ));
  loadDistributors$ = createEffect(() => this.actions$.pipe(
    ofType(LoadDistributors),
    mergeMap(() => this.distributorsService.index().pipe(
      map((items: IDistributor[]) => {
        return LoadDistributorsSuccess({ items });
      })
    ))
  ));
  addDistributor$ = createEffect(() => this.actions$.pipe(
    ofType(AddDistributor),
    mergeMap(({ item }) => this.distributorsService.create(item).pipe(
      tap(() => localStorage.removeItem('ivDistributorItem')),
      map((created: any) => {
        return AddDistributorSuccess({ created });
      })
    ))
  ));
  setDistributor$ = createEffect(() => this.actions$.pipe(
    ofType(SetDistributor),
    map(item => item.item),
    tap((item: any) => {
      localStorage.setItem('ivDistributorItem', JSON.stringify(item));
    })
  ), { dispatch: false })
  constructor(
    private actions$: Actions,
    private distributorsService: DistributorsService
  ) { }
}