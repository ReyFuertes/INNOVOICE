import { Component, OnInit } from '@angular/core';
import { PageAction } from 'src/app/models/action';
import { GenericPageComponent } from 'src/app/shared/components/generic-component/generic-page.component';
import { ICrumb } from 'src/app/models/generic.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ITenant } from '../models/tenant.model';
import { LoadTenant } from '../store/tenant.action';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'iv-tenant-container',
  templateUrl: './tenant-container.component.html',
  styleUrls: ['./tenant-container.component.scss']
})
export class TenantContainerComponent extends GenericPageComponent implements OnInit {
  public GetCrumbs(): ICrumb[] {
    return [{ text: 'Tenant', path: '' }]
  }
  public GetPageAction(): PageAction {
    return { addBtnText: 'add tenant', addFn: this.doAction };
  }

  constructor(private store: Store<AppState>, private router: Router) {
    super();
    this.store.dispatch(LoadTenant());
  }

  ngOnInit(): void { 
    
  }

  public doAction = (): void => {
    this.router.navigateByUrl('dashboard/tenant/add');
  }
}
