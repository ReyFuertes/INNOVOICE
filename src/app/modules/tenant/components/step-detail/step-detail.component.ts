import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { TenantState } from '../../store/tenant.reducer';
import { getTenantItemsSelector } from '../../store/tenant.selector';

@Component({
  selector: 'iv-step-detail',
  templateUrl: './step-detail.component.html',
  styleUrls: ['./step-detail.component.scss']
})

export class StepDetailComponent implements OnInit {
  @Output()
  public formValueEmitter = new EventEmitter<FormGroup>();

  public form: FormGroup;

  constructor(private store: Store<TenantState>, private fb: FormBuilder) {
    this.form = this.fb.group({
      companyName: ['', Validators.required],
      contactName: ['', Validators.required],
      contactEmail: ['', Validators.required],
      companyAddress: ['', Validators.required],
      companyPhoneNumber: ['', Validators.required],
      managementDomain: ['', Validators.required]
    });
    this.form.valueChanges
      .subscribe(values => {
        if (this.form.valid)
          this.formValueEmitter.emit(this.fb.group(values))
      });
  }

  ngOnInit() {
    this.store.pipe(take(1), select(getTenantItemsSelector))
      .subscribe(formValues => {
        if (formValues) {
          this.form.patchValue(formValues);
        } else {
          const item = JSON.parse(localStorage.getItem('ivTenantItem')) || null;
          if (item)
            this.form.patchValue(item);
        }
      })
  }
}

