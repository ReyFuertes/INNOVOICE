import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { GenericAddEditDetailComponent } from 'src/app/generics/generic-detail-page';
import { IIvrMenu } from '../../models/ivr-menu.model';
import { ICrumb, AddEditState } from 'src/app/models/generic.model';
import { PageAction } from 'src/app/models/action';
import { AppState } from 'src/app/store/app.reducer';
import { Store, select } from '@ngrx/store';
import { FindIvrMenu } from '../../store/ivr-menu.action';
import { tap } from 'rxjs/operators';
import { getIvrMenuByIdSelector } from '../../store/ivr-menu.selector';

@Component({
  selector: 'iv-ivr-menu-page-detail',
  templateUrl: './ivr-menu-page-detail.component.html',
  styleUrls: ['./ivr-menu-page-detail.component.scss']
})

export class IvrMenuPageDetailComponent extends GenericAddEditDetailComponent<IIvrMenu> implements OnInit {
  public GetCrumbs = (): ICrumb[] => null;
  public GetPageAction(): PageAction {
    return {
      backBtnText: 'Back to Ivr Menu',
      backFn: () => {
        this.router.navigateByUrl('/dashboard/pages/ivr-menus');
      }
    };
  }
  public nums: Array<{ text: string, active: boolean }> = [
    {
      text: '1',
      active: true
    },
    {
      text: '2',
      active: true
    },
    {
      text: '3',
      active: true
    }, {
      text: '4',
      active: true
    }, {
      text: '5',
      active: true
    }, {
      text: '6',
      active: false
    }, {
      text: '7',
      active: false
    }, {
      text: '8',
      active: false
    }, {
      text: '9',
      active: false
    }, {
      text: '*',
      active: false
    }, {
      text: '0',
      active: false
    }, {
      text: '#',
      active: false
    }
  ]
  public id: number | string;

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    super();
    this.form = this.fb.group({
      id: [''],
      domain_uuid: [''],
      voicemail_id: [''],
      enabled: [''],
      email_addresses: [''],
      interDigitTimeout: [''],
      keep_after_email: [''],
      delivery_mode: [''],
      escalation_email_1: [''],
      escalation_hours_1: [''],
      escalation_email_2: [''],
      escalation_hours_2: [''],
      escalation_email_3: [''],
      escalation_hours_3: [''],
      description: [''],
      created_at: [''],
      updated_at: [''],
      version: [''],
    });

    this.id = this.route.snapshot.paramMap.get('id') || null;
    if (this.id)
      this.store.dispatch(FindIvrMenu({ id: this.id }));

    this.form.valueChanges.subscribe(values => this.entity = values);
  }

  private entityToForm(ext: IIvrMenu) {
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
      this.store.pipe(select(getIvrMenuByIdSelector(this.id)))
        .pipe(tap((ivr: IIvrMenu) => this.entityToForm(ivr)))
        .subscribe()
    }
  }

  public onSubmit = (): void => {
    if (this.form.valid)
      this.doSaveEmitter.emit({ entity: this.entity, doSave: true });
  }
}