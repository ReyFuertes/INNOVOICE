import { Component, OnInit } from '@angular/core';
import { ICrumb, AddEditState } from 'src/app/models/generic.model';
import { PageAction } from 'src/app/models/action';
import { GenericAddEditDetailComponent } from 'src/app/generics/generic-detail-page';
import { IVoiceMail } from '../../models/voice-mail.model';
import { VoiceMailState } from '../../store/reducers/voice-mail.reducer';
import { Store, select } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { FindVoiceMail } from '../../store/actions/voice-mail.action';
import { getVoiceMailByIdSelector } from '../../store/selectors/voice-mail.selector';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'iv-voice-mail-page-detail',
  templateUrl: './voice-mail-page-detail.component.html',
  styleUrls: ['./voice-mail-page-detail.component.scss']
})

export class VoiceMailPageDetailComponent extends GenericAddEditDetailComponent<IVoiceMail> implements OnInit {
  public GetCrumbs = (): ICrumb[] => null;
  public GetPageAction(): PageAction {
    return {
      backBtnText: 'Back to Voicemail',
      backFn: () => {
        this.router.navigateByUrl('/dashboard/pages/voicemail');
      }
    };
  }
  public form: FormGroup;
  public id: number | string;

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    super();
    this.form = this.fb.group({
      id: [''],
      domain_uuid: [''],
      voicemail_id: [''],
      voicemail_pin: [''],
      enabled: [null],
      email_addresses: [''],
      keep_after_email: [null],
      delivery_mode: [''],
      escalation_email_1: [''],
      escalation_hours_1: [null],
      escalation_email_2: [''],
      escalation_hours_2: [null],
      escalation_email_3: [''],
      escalation_hours_3: [null],
      description: [''],
      created_at: [null],
      updated_at: [null],
      version: [null],
    })

    this.id = this.route.snapshot.paramMap.get('id') || null;
    if (this.id)
      this.store.dispatch(FindVoiceMail({ id: this.id }));

    this.form.valueChanges.subscribe(values => this.entity = values);
  }

  private entityToForm(ext: IVoiceMail) {
    if (ext) {
      this.form.controls['id'].patchValue(ext.id);
      this.form.controls['domain_uuid'].patchValue(ext.domain_uuid);
      this.form.controls['voicemail_id'].patchValue(ext.voicemail_id);
      this.form.controls['enabled'].patchValue(ext.enabled);
      this.form.controls['email_addresses'].patchValue(ext.email_addresses);
      this.form.controls['keep_after_email'].patchValue(ext.keep_after_email);
      this.form.controls['delivery_mode'].patchValue(ext.delivery_mode);
      this.form.controls['escalation_email_1'].patchValue(ext.escalation_email_1);
      this.form.controls['escalation_hours_1'].patchValue(ext.escalation_hours_1);
      this.form.controls['escalation_email_2'].patchValue(ext.escalation_email_2);
      this.form.controls['escalation_hours_2'].patchValue(ext.escalation_hours_2);
      this.form.controls['escalation_email_3'].patchValue(ext.escalation_email_3);
      this.form.controls['escalation_hours_3'].patchValue(ext.escalation_hours_3);
      this.form.controls['description'].patchValue(ext.description);
      this.form.controls['created_at'].patchValue(ext.created_at);
      this.form.controls['updated_at'].patchValue(ext.updated_at);
      this.form.controls['version'].patchValue(ext.version);
    }
  }

  ngOnInit() {
    if (this.state == AddEditState.edit && this.id) {
      this.store.pipe(select(getVoiceMailByIdSelector(this.id)))
        .pipe(tap((vm: IVoiceMail) => this.entityToForm(vm)))
        .subscribe()
    }
  }

  public onSubmit = (): void => {
    if (this.form.valid)
      this.doSaveEmitter.emit({ entity: this.entity, doSave: true });
  }
}