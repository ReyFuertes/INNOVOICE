import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CardType } from 'src/app/models/generic.model';
import { ITenant } from '../../models/tenant.model';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { TenantState } from '../../store/tenant.reducer';
import { getTenantItemsSelector } from '../../store/tenant.selector';
import { LoadTenant } from '../../store/tenant.action';
import { GenericCardListComponent } from 'src/app/generics/generic-card-list';

@Component({
  selector: 'iv-tenant-card',
  templateUrl: './tenant-card.component.html',
  styleUrls: ['./tenant-card.component.scss']
})

export class TenantCardComponent extends GenericCardListComponent<ITenant> implements OnInit {
  constructor(public router: Router, private store: Store<TenantState>) {
    super(router);
    this.items$ = this.store.pipe(select(getTenantItemsSelector));
  }

  ngOnInit() { }

  public gotoTenant(id: number): void {
    this.store.dispatch(LoadTenant());
    this.router.navigateByUrl('/dashboard/tenant');
  }
}