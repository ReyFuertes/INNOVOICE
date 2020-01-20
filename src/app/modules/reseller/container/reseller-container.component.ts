import { Component, OnInit } from '@angular/core';
import { PageAction } from 'src/app/models/action';
import { GenericPageComponent } from 'src/app/shared/components/generic-component/generic-page.component';
import { ICrumb } from 'src/app/models/generic.model';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { IReseller } from '../models/reseller.model';
import { LoadReseller } from '../store/reseller.action';

@Component({
  selector: 'iv-reseller-container',
  templateUrl: './reseller-container.component.html',
  styleUrls: ['./reseller-container.component.scss']
})
export class ResellerContainerComponent extends GenericPageComponent implements OnInit {
  public GetCrumbs(): ICrumb[] {
    return [{ text: 'Reseller', path: '' }]
  }
  public GetPageAction(): PageAction {
    return { addBtnText: 'add reseller', addFn: this.doAction };
  }

  constructor(private store: Store<IReseller>, private router: Router) {
    super();
    this.store.dispatch(LoadReseller());
  }

  ngOnInit(): void { 
    
  }

  public doAction = (): void => {
    this.router.navigateByUrl('dashboard/reseller/add');
  }
}
