import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PageAction } from 'src/app/models/action';
import { IExtension } from '../../models/extension';
import { Store, select } from '@ngrx/store';
import { ExtensionState } from '../../store/extension.reducer';
import { FindExtension, UpdateExtension } from '../../store/extension.action';
import { tap } from 'rxjs/operators';
import { GenericAddEditDetailComponent } from 'src/app/generics/generic-detail-page';
import { AddEditState } from 'src/app/models/generic.model';
import { getExtensionsSelector, getExtensionByIdSelector } from '../../store/extension.selector';
import { AppState } from 'src/app/store/app.reducer';
@Component({
  selector: 'iv-extension-page-detail',
  templateUrl: './extension-page-detail.component.html',
  styleUrls: ['./extension-page-detail.component.scss']
})

export class ExtensionPageDetailComponent extends GenericAddEditDetailComponent<IExtension> implements OnInit {
  public GetPageAction(): PageAction {
    return {
      backBtnText: 'Back to Extensions',
      backFn: () => {
        this.router.navigateByUrl('/dashboard/pages/extensions');
      }
    };
  }
  public form: FormGroup;
  public id: number | string;
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private fb: FormBuilder,
    private route: ActivatedRoute,
  ) {
    super();
    this.form = this.fb.group({
      id: [''],
      extension: [''],
      numberAlias: [''],
      password: [''],
      teams: [''],
      isEnabled: [false],
      displayName: [''],
      callerid: [''],
      directoryName: [''],
      callTimeout: [''],
      maxConcurrentCalls: [''],
      number_alias: [null],
      enabled: [false],
      outbound_caller_id_name: [null],
      outbound_caller_id_number: [null],
      absolute_codec_string: [null],
      accountcode: [null],
      call_forwarding: [null],
      call_group: [null],
      call_recording: ['ALL'],
      call_timeout: [0],
      description: [null],
      directory_full_name: [null],
      directory_visible: [false],
      do_not_disturb: [false],
      follow_me: [null],
      hold_music: [null],
      limit_destination: [null],
      limit_max: [null],
      missed_call_action: [null],
      domain_uuid: [''],
      version: [0]
    });
    this.id = this.route.snapshot.paramMap.get('id') || null;
    if (this.id)
      this.store.dispatch(FindExtension({ id: this.id }));

    this.form.valueChanges.subscribe(values => this.entity = values);
  }

  public onSubmit = (): void => {
    if (this.form.valid)
      this.doSaveEmitter.emit({ entity: this.entity, doSave: true });
  }

  private entityToForm(ext: IExtension) {
    if (ext) {
      this.form.controls['id'].patchValue(ext.id);
      this.form.controls['extension'].patchValue(ext.extension);
      this.form.controls['numberAlias'].patchValue(ext.number_alias);
      this.form.controls['password'].patchValue(ext.password);
      this.form.controls['description'].patchValue(ext.description);
      this.form.controls['isEnabled'].patchValue(ext.enabled);
      // this.form.controls['displayName'].patchValue(this.extension)
      this.form.controls['callerid'].patchValue(ext.outbound_caller_id_number);
      this.form.controls['directoryName'].patchValue(ext.directory_full_name);
      this.form.controls['callTimeout'].patchValue(ext.call_timeout);
      this.form.controls['domain_uuid'].patchValue(ext.domain_uuid);
    }
  }

  ngOnInit() {
    if (this.state == AddEditState.edit && this.id) {
      this.store.pipe(select(getExtensionByIdSelector(this.id)))
        .pipe(tap((ext: IExtension) => this.entityToForm(ext)))
        .subscribe()
    }
  }

  public back(): void {
    this.router.navigateByUrl('dashboard/pages/extensions');
  }
}
