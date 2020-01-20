import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CardType } from 'src/app/models/generic.model';
import { IReseller } from '../../models/reseller.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { ResellerState } from '../../store/reseller.reducer';
import { getResellerItemsSelector } from '../../store/reseller.selector';
import { LoadTenant } from 'src/app/modules/tenant/store/tenant.action';
import { GenericCardListComponent } from 'src/app/generics/generic-card-list';
import { AppState } from 'src/app/store/app.reducer';
@Component({
  selector: 'iv-reseller-card',
  templateUrl: './reseller-card.component.html',
  styleUrls: ['./reseller-card.component.scss']
})

export class ResellerCardComponent  extends GenericCardListComponent<IReseller> implements OnInit {
  constructor(public router: Router, private store: Store<AppState>) {
    super(router);
    this.items$ = this.store.pipe(select(getResellerItemsSelector));
  }

  ngOnInit() { }

  public gotoTenant(): void {
    this.store.dispatch(LoadTenant());
    this.router.navigateByUrl('/dashboard/tenant');
  }
}