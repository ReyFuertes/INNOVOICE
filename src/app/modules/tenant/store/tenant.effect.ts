import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, tap } from 'rxjs/operators';
import { LoadTenantSuccess, LoadTenant, AddTenant, AddTenantSuccess, SetTenant } from './tenant.action';
import { TenantService } from '../service/tenant.service';

@Injectable()
export class TenantEffects {
  loadTenant$ = createEffect(() => this.actions$.pipe(
    ofType(LoadTenant),
    mergeMap(() => this.tenantService.index().pipe(
      map((items: any) => {
        return LoadTenantSuccess({ items })
      })
    ))
  ));
  addTenant$ = createEffect(() => this.actions$.pipe(
    ofType(AddTenant),
    mergeMap(({ item }) => this.tenantService.create(item).pipe(
      tap(() => localStorage.removeItem('ivTenantItem')),
      map((created: any) => {
        return AddTenantSuccess({ created });
      })
    ))
  ));
  setTenant$ = createEffect(() => this.actions$.pipe(
    ofType(SetTenant),
    map(item => item.item),
    tap((item: any) => {
      localStorage.setItem('ivTenantItem', JSON.stringify(item));
    })
  ), { dispatch: false })
  constructor(
    private actions$: Actions,
    private tenantService: TenantService
  ) { }
}