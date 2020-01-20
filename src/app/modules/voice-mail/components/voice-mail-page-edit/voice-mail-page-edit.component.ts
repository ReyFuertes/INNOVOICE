import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { GenericEditPage } from 'src/app/generics/generic-add-edit-page';
import { IVoiceMail } from '../../models/voice-mail.model';
import { AddEditState, EntitySave } from 'src/app/models/generic.model';
import { VoiceMailState } from '../../store/reducers/voice-mail.reducer';
import { Store } from '@ngrx/store';
import { UpdateVoiceMail } from '../../store/actions/voice-mail.action';

@Component({
  selector: 'iv-voice-mail-page-edit',
  templateUrl: './voice-mail-page-edit.component.html',
  styleUrls: ['./voice-mail-page-edit.component.scss']
})

export class VoicemailPageEditComponent extends GenericEditPage<IVoiceMail> implements OnInit {
  public extension: IVoiceMail;
  public state = AddEditState.edit;
  constructor(private store: Store<VoiceMailState>) {
    super();
  }
  public form: FormGroup;
  public showDialog: boolean = false;

  ngOnInit() { }

  public save = (event: EntitySave<IVoiceMail>): void => {
    if (event.doSave)
      this.store.dispatch(UpdateVoiceMail({ entity: event.entity }));
  }
}