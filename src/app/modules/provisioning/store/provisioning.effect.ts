import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { LoadProvisioningSuccess, LoadProvisioning, FindProvisioning, FindProvisioningSuccess, UpdateProvisioning, UpdateProvisioningSuccess } from './provisioning.action';
import { ProvisioningService } from '../provisioning.service';
import { IProvisioning } from '../provisioning.model';

@Injectable()
export class ProvisioningEffects {
  loadProvisioning$ = createEffect(() => this.actions$.pipe(
    ofType(LoadProvisioning),
    mergeMap(() => this.provisioningService.index().pipe(
      map((items: IProvisioning[]) => {
        return LoadProvisioningSuccess({ items });
      })
    ))
  ));
  findProvisioning$ = createEffect(() => this.actions$.pipe(
    ofType(FindProvisioning),
    mergeMap(({id}) => this.provisioningService.find(id).pipe(
      map((item: IProvisioning) => {
        return FindProvisioningSuccess({ item })
      })
    ))
  ));
  updateProvisioning$ = createEffect(() => this.actions$.pipe(
    ofType(UpdateProvisioning),
    mergeMap(({entity}) => this.provisioningService.update(entity).pipe(
      map((item: IProvisioning) => {
        //check if successfull
        return UpdateProvisioningSuccess({ updated: true })
      })
    ))
  ));
  constructor(
    private actions$: Actions,
    private provisioningService: ProvisioningService
  ) { }
}