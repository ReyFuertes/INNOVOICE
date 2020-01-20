import { Component, OnInit } from '@angular/core';
import { ICrumb, TableView } from 'src/app/models/generic.model';
import { PageAction } from 'src/app/models/action';
import { GenericPageComponent } from 'src/app/shared/components/generic-component/generic-page.component';
import { AppState } from 'src/app/store/app.reducer';
import { Store, select } from '@ngrx/store';
import { getProvisioningsSelector, filterProvisioningSelector } from '../../store/provisioning.selector';
import { Observable } from 'rxjs';
import { IProvisioning } from '../../provisioning.model';
import { take, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'iv-provisioning-page',
  templateUrl: './provisioning-page.component.html',
  styleUrls: ['./provisioning-page.component.scss']
})

export class ProvisionPageComponent extends GenericPageComponent implements OnInit {
  public GetCrumbs(): ICrumb[] {
    return [{ text: 'Provisioning', path: '' }]
  }
  public GetPageAction(): PageAction {
    return { addBtnText: 'add device', iconName: 'icon-plus-circle' };
  }
  public items$: Observable<IProvisioning[]>;
  constructor(
    private store: Store<AppState>
  ) {
    super();
    this.items$ = this.store.pipe(select(getProvisioningsSelector));
  }

  public tableView = TableView[TableView.card];

  ngOnInit(): void { }

  public onSearch(event: string = ''): void {
    if (event)
      this.items$ = this.store.pipe(debounceTime(500), select(filterProvisioningSelector(event)));
    else
      this.items$ = this.store.pipe(select(getProvisioningsSelector));
  }

  public onToggle(event: string): void {
    this.tableView = event;
  }
}