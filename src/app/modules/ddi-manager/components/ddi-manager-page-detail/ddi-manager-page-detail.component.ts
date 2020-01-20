import { Component, OnInit } from '@angular/core';
import { ICrumb, AddEditState } from 'src/app/models/generic.model';
import { PageAction } from 'src/app/models/action';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GenericAddEditDetailComponent } from 'src/app/generics/generic-detail-page';
import { IInboundNumber } from '../../models/inbound.number';
import { Store, select } from '@ngrx/store';
import { FindDdiManager } from '../../store/ddi-manager.action';
import {  getDdiManagerByIdSelector } from '../../store/ddi-manager.selector';
import { tap } from 'rxjs/operators';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'iv-ddi-manager-page-detail',
  templateUrl: './ddi-manager-page-detail.component.html',
  styleUrls: ['./ddi-manager-page-detail.component.scss']
})

export class DdiManagerPageDetailComponent extends GenericAddEditDetailComponent<IInboundNumber> implements OnInit {
  public GetCrumbs = (): ICrumb[] => null;
  public GetPageAction(): PageAction {
    return {
      backBtnText: 'Back to DDI Manager',
      backFn: () => {
        this.router.navigateByUrl('/dashboard/pages/ddi-manager');
      }
    };
  }
  public form: FormGroup;
  public id: number | string;

  constructor(private store: Store<AppState>, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    super();
    this.form = this.fb.group({
      id: [''],
      domainUuid: [''],
      destination: [''],
      number: [''],
      description: [''],
      callerIdNamePrefix: [''],
      callerIdNumberPrefix: [''],
      enabled: [''],
      createdAt: [''],
      updatedAt: [''],
      version: ['']
    });

    this.id = this.route.snapshot.paramMap.get('id') || null;
    if (this.id)
      this.store.dispatch(FindDdiManager({ id: this.id }));
  }

  ngOnInit() {
    if (this.state == AddEditState.edit && this.id) {
      this.store.pipe(select(getDdiManagerByIdSelector(this.id)))
        .pipe(tap((ddi: IInboundNumber) => this.entityToForm(ddi)))
        .subscribe()
    }
  }

  public onSubmit = (): void => {
    if (this.form.valid)
      this.doSaveEmitter.emit({ entity: this.entity, doSave: true });
  }

  private entityToForm(ddi: IInboundNumber) {
    if (ddi) {
      this.form.controls['id'].patchValue(ddi.id);
      this.form.controls['domainUuid'].patchValue(ddi.domain_uuid);
      this.form.controls['destination'].patchValue(ddi.destination);
      this.form.controls['number'].patchValue(ddi.number);
      this.form.controls['description'].patchValue(ddi.description);
      this.form.controls['callerIdNamePrefix'].patchValue(ddi.caller_id_name_prefix);
      this.form.controls['callerIdNumberPrefix'].patchValue(ddi.caller_id_number_prefix);
      this.form.controls['enabled'].patchValue(ddi.enabled);
      this.form.controls['createdAt'].patchValue(ddi.created_at);
      this.form.controls['updatedAt'].patchValue(ddi.updated_at);
      this.form.controls['version'].patchValue(ddi.version);
    }
  }

  public back(): void {
    this.router.navigateByUrl('dashboard/pages/ddi-mananager');
  }
}