import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { getDistributorItemSelector } from '../../store/distributor.selector';
import { IDistributor } from '../../models/distributor.model';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'iv-step-summary',
  templateUrl: './step-summary.component.html',
  styleUrls: ['./step-summary.component.scss']
})

export class StepSummaryComponent implements OnInit {
  public distributor: IDistributor;
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.store.pipe(take(1), select(getDistributorItemSelector))
      .subscribe(formValues => {
        if (formValues) {
          this.distributor = formValues;
        }
      })
  }

  public redirectTo(): void {
    this.router.navigateByUrl('/dashboard/distributor/dns-setting');
  }
}