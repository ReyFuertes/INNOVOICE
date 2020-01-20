import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap } from 'rxjs/operators';
import { LoadExtension, LoadExtensionSuccess, FindExtension, FindExtensionSuccess, UpdateExtension, UpdateExtensionSuccess, AddExtensionSuccess } from './extension.action';
import { IExtension } from '../models/extension';
import { ExtensionsService } from '../services/extensions.service';
@Injectable()
export class ExtensionEffects {
  loadExtension$ = createEffect(() => this.actions$.pipe(
    ofType(LoadExtension),
    mergeMap(() => this.extensionService.index().pipe(
      map((items: IExtension[]) => {
        return LoadExtensionSuccess({ items })
      })
    ))
  ));
  findExtension$ = createEffect(() => this.actions$.pipe(
    ofType(FindExtension),
    mergeMap(({id}) => this.extensionService.find(id).pipe(
      map((entity: IExtension) => {
        return FindExtensionSuccess({ entity })
      })
    ))
  ));
  updateExtension$ = createEffect(() => this.actions$.pipe(
    ofType(UpdateExtension),
    mergeMap(({entity}) => this.extensionService.update(entity).pipe(
      map((extension: IExtension) => {
        //check if successfull
        return UpdateExtensionSuccess({ updated: true })
      })
    ))
  ));
  addExtension$ = createEffect(() => this.actions$.pipe(
    ofType(UpdateExtension),
    mergeMap(({entity}) => this.extensionService.create(entity).pipe(
      map((entity: IExtension) => {
        //check if successfull
        return AddExtensionSuccess({ created: true })
      })
    ))
  ));
  constructor(
    private actions$: Actions,
    private extensionService: ExtensionsService
  ) { }
}