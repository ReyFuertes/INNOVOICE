import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Store, select } from '@ngrx/store';
import { DistributorState } from '../../store/distributor.reducer';
import { take } from 'rxjs/operators';
import { getDistributorItemsSelector, getDistributorItemSelector } from '../../store/distributor.selector';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'iv-step-detail',
  templateUrl: './step-detail.component.html',
  styleUrls: ['./step-detail.component.scss']
})

export class StepDetailComponent implements OnInit {
  @Output()
  public formValueEmitter = new EventEmitter<FormGroup>();

  public form: FormGroup;

  constructor(private store: Store<AppState>, private fb: FormBuilder) {
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
    this.store.pipe(take(1), select(getDistributorItemSelector))
      .subscribe(formValues => {
        if (formValues && !this.form.valid) {
          this.form.patchValue(formValues);
        }
      })
  }

  ngOnInit() {
    this.store.pipe(take(1), select(getDistributorItemsSelector))
      .subscribe(formValues => {
        if (formValues) {
          this.form.patchValue(formValues);
        } else {
          const item = JSON.parse(localStorage.getItem('ivDistributorItem')) || null;
          if (item)
            this.form.patchValue(item);
        }
      })
  }
}

