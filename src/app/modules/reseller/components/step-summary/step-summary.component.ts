import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { take } from 'rxjs/operators';
import { IReseller } from '../../models/reseller.model';
import { ResellerState } from '../../store/reseller.reducer';
import { getResellerItemSelector } from '../../store/reseller.selector';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'iv-step-summary',
  templateUrl: './step-summary.component.html',
  styleUrls: ['./step-summary.component.scss']
})

export class StepSummaryComponent implements OnInit {
  public reseller: IReseller;
  constructor(private store: Store<AppState>, private router: Router) { }

  ngOnInit() {
    this.store.pipe(take(1), select(getResellerItemSelector))
      .subscribe(formValues => {
        if (formValues) {
          this.reseller = formValues;
        }
      })
  }

  public redirectTo(): void {
    this.router.navigateByUrl('/dashboard/reseller/dns-setting');
  }
}