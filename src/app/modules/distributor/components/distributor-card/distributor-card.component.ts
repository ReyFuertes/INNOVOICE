import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CardType } from 'src/app/models/generic.model';
import { Store, select } from '@ngrx/store';
import { DistributorState } from '../../store/distributor.reducer';
import { Observable } from 'rxjs';
import { IDistributor } from '../../models/distributor.model';
import { getDistributorItemsSelector } from '../../store/distributor.selector';
import { GetDistributorReseller } from '../../store/distributor.action';
import { Router } from '@angular/router';
import { GenericCardListComponent } from 'src/app/generics/generic-card-list';
import { AppState } from 'src/app/store/app.reducer';
import { EntityRoutes } from 'src/app/generics/generic.enum';

@Component({
  selector: 'iv-distributor-card',
  templateUrl: './distributor-card.component.html',
  styleUrls: ['./distributor-card.component.scss']
})

export class DistributorCardComponent extends GenericCardListComponent<IDistributor> implements OnInit {
  public distributors$: Observable<IDistributor[]>;

  constructor(public router: Router, private store: Store<AppState>) {
    super(router);
    this.distributors$ = this.store.pipe(select(getDistributorItemsSelector));
  }

  ngOnInit() { }

  public gotoReseller(id: number): void {
    this.store.dispatch(GetDistributorReseller());
    this.router.navigateByUrl('/dashboard/reseller');
  }
}