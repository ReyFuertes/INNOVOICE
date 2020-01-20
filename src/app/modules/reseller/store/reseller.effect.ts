import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap } from 'rxjs/operators';
import { AddReseller, AddResellerSuccess, LoadResellerSuccess, LoadReseller, SetReseller } from './reseller.action';
import { IReseller } from '../models/reseller.model';
import { ResellerService } from '../service/reseller.service';

@Injectable()
export class ResellerEffects {
  loadReseller$ = createEffect(() => this.actions$.pipe(
    ofType(LoadReseller),
    mergeMap(() => this.resellersService.index().pipe(
      map((items: IReseller[]) => {
        return LoadResellerSuccess({ items })
      })
    ))
  ));
  addReseller$ = createEffect(() => this.actions$.pipe(
    ofType(AddReseller),
    mergeMap(({ item }) => this.resellersService.create(item).pipe(
      map((created: any) => {
        return AddResellerSuccess({ created })
      })
    ))
  ));
  setReseller$ = createEffect(() => this.actions$.pipe(
    ofType(SetReseller),
    map(item => item.item),
    tap((item: any) => {
      localStorage.setItem('ivResellerItem', JSON.stringify(item));
    })
  ), { dispatch: false })
  constructor(
    private actions$: Actions,
    private resellersService: ResellerService
  ) { }
}