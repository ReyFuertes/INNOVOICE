import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { ITenant } from '../../models/tenant.model';
import { getTenantItemSelector } from '../../store/tenant.selector';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'iv-step-summary',
  templateUrl: './step-summary.component.html',
  styleUrls: ['./step-summary.component.scss']
})

export class StepSummaryComponent implements OnInit {
  public tenant: ITenant;
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.store.pipe(take(1), select(getTenantItemSelector))
      .subscribe(formValues => {
        if (formValues)
          this.tenant = formValues;
      })
  }

  public redirectTo(): void {
    this.router.navigateByUrl('/dashboard/reseller/dns-setting');
  }
}

