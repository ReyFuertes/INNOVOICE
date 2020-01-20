import { Component, OnInit } from '@angular/core';
import { PageAction } from 'src/app/models/action';
import { GenericPageComponent } from 'src/app/shared/components/generic-component/generic-page.component';
import { ICrumb } from 'src/app/models/generic.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IDistributor } from '../models/distributor.model';
import { LoadDistributors } from '../store/distributor.action';

@Component({
  selector: 'iv-distributor-container',
  templateUrl: './distributor-container.component.html',
  styleUrls: ['./distributor-container.component.scss']
})
export class DistributorContainerComponent extends GenericPageComponent implements OnInit {
  public GetCrumbs(): ICrumb[] {
    return [{ text: 'Distributor', path: '' }]
  }
  public GetPageAction(): PageAction {
    return { addBtnText: 'add distributor', addFn: this.doAction };
  }

  constructor(private store: Store<IDistributor>, private router: Router) {
    super();
    this.store.dispatch(LoadDistributors());
  }

  ngOnInit(): void { 

  }

  public doAction = (): void => {
    this.router.navigateByUrl('/dashboard/distributor/add');
  }
}
