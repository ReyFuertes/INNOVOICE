import { Component, OnInit } from '@angular/core';
import { PageAction } from 'src/app/models/action';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { GenericAddEditDetailComponent } from 'src/app/generics/generic-detail-page';
import { IRingGroup } from '../../models/ring-group.model';
import { AddEditState } from 'src/app/models/generic.model';
import { Store, select } from '@ngrx/store';
import { RingGroupState } from '../../store/ring-group.reducer';
import { getRingGroupsSelector, getRingGroupByIdSelector } from '../../store/ring-group.selector';
import { tap } from 'rxjs/operators';
import { FindRingGroup } from '../../store/ring-group.action';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'iv-ring-group-page-detail',
  templateUrl: './ring-group-page-detail.component.html',
  styleUrls: ['./ring-group-page-detail.component.scss']
})

export class RingGroupPageDetailComponent extends GenericAddEditDetailComponent<IRingGroup> implements OnInit {
  public GetPageAction(): PageAction {
    return {
      backBtnText: 'Back to Ring Group',
      backFn: () => {
        this.router.navigateByUrl('/dashboard/pages/ring-group');
      }
    };
  }
  public id: number | string;

  constructor(private route: ActivatedRoute, private store: Store<AppState>, private router: Router, private fb: FormBuilder) {
    super();
    this.form = this.fb.group({
      id: [''],
      domainUuid: [''],
      name: [''],
      strategy: [''],
      enabled: [''],
      callerIdNamePrefix: [''],
      callerIdNumberPrefix: [''],
      distinctiveRing: [''],
      ringback: [''],
      skipActive: [''],
      callForward: [''],
      timeoutAction: [''],
      destinations: [''],
      description: [''],
      createdAt: [''],
      updatedAt: [''],
      version: ['']
    });
    this.id = this.route.snapshot.paramMap.get('id') || null;
    if (this.id)
      this.store.dispatch(FindRingGroup({ id: this.id }));

  }

  ngOnInit() {
    if (this.state == AddEditState.edit && this.id) {
      this.store.pipe(select(getRingGroupByIdSelector(this.id)))
        .pipe(tap((rg: IRingGroup) => this.entityToForm(rg)))
        .subscribe()
    }
  }

  public onSubmit = (): void => {
    if (this.form.valid)
      this.doSaveEmitter.emit({ entity: this.entity, doSave: true });
  }

  private entityToForm(rg: IRingGroup) {
    if (rg) {
      this.form.controls['id'].patchValue(rg.id);
      this.form.controls['domainUuid'].patchValue(rg.domain_uuid);
      this.form.controls['name'].patchValue(rg.name);
      this.form.controls['strategy'].patchValue(rg.strategy);
      this.form.controls['enabled'].patchValue(rg.enabled);
      this.form.controls['callerIdNamePrefix'].patchValue(rg.caller_id_name_prefix);
      this.form.controls['callerIdNumberPrefix'].patchValue(rg.caller_id_number_prefix);
      this.form.controls['distinctiveRing'].patchValue(rg.distinctive_ring);
      this.form.controls['ringback'].patchValue(rg.ringback);
      this.form.controls['skipActive'].patchValue(rg.skip_active);
      this.form.controls['callForward'].patchValue(rg.call_forward);
      this.form.controls['timeoutAction'].patchValue(rg.timeout_action);
      this.form.controls['destinations'].patchValue(rg.destinations);
      this.form.controls['description'].patchValue(rg.description);
      this.form.controls['createdAt'].patchValue(rg.created_at);
      this.form.controls['updatedAt'].patchValue(rg.updated_at);
      this.form.controls['version'].patchValue(rg.version);
    }
  }
}