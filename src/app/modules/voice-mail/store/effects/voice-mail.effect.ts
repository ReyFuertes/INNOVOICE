import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, mergeMap, catchError, tap, take } from 'rxjs/operators';
import {  LoadVoiceMail, LoadVoiceMailSuccess, AddVoiceMail, AddVoiceMailSuccess, UpdateVoiceMailSuccess, UpdateVoiceMail, FindVoiceMailSuccess, FindVoiceMail} from '../actions/voice-mail.action';
import { IVoiceMail } from '../../models/voice-mail.model';
import { VoiceMailService } from '../../services/voice-mail.service';

@Injectable()
export class VoiceMailEffects {
  loadVoiceMail$ = createEffect(() => this.actions$.pipe(
    ofType(LoadVoiceMail),
    mergeMap(() => this.voiceMailService.index().pipe(
      map((items: IVoiceMail[]) => {
        return LoadVoiceMailSuccess({ items });
      })
    ))
  ));
  findVoiceMail$ = createEffect(() => this.actions$.pipe(
    ofType(FindVoiceMail),
    mergeMap(({id}) => this.voiceMailService.find(id).pipe(
      map((item: IVoiceMail) => {
        return FindVoiceMailSuccess({ item })
      })
    ))
  ));
  updateVoiceMail$ = createEffect(() => this.actions$.pipe(
    ofType(UpdateVoiceMail),
    mergeMap(({entity}) => this.voiceMailService.update(entity).pipe(
      map((extension: IVoiceMail) => {
        //check if successfull
        return UpdateVoiceMailSuccess({ updated: true })
      })
    ))
  ));
  addVoiceMail$ = createEffect(() => this.actions$.pipe(
    ofType(AddVoiceMail),
    mergeMap(({entity}) => this.voiceMailService.create(entity).pipe(
      map((entity: IVoiceMail) => {
        //check if successfull
        return AddVoiceMailSuccess({ created: true })
      })
    ))
  ));
  constructor(
    private actions$: Actions,
    private voiceMailService: VoiceMailService
  ) { }
}