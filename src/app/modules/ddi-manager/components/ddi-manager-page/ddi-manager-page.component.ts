import { Component, OnInit, Input } from '@angular/core';
import { ICrumb, TableView } from 'src/app/models/generic.model';
import { PageAction } from 'src/app/models/action';
import { GenericPageComponent } from 'src/app/shared/components/generic-component/generic-page.component';
import { DdiManagerState } from '../../store/ddi-manager.reducer';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { filterDdiManagerelector, getDdiManagersSelector } from '../../store/ddi-manager.selector';
import { tap, debounceTime } from 'rxjs/operators';
import { IInboundNumber } from '../../models/inbound.number';
import { AppState } from 'src/app/store/app.reducer';
import { Observable } from 'rxjs';

@Component({
  selector: 'iv-ddi-manager-page',
  templateUrl: './ddi-manager-page.component.html',
  styleUrls: ['./ddi-manager-page.component.scss']
})

export class DdiManagerPageComponent extends GenericPageComponent implements OnInit {
  public GetCrumbs(): ICrumb[] {
    return [{ text: 'DDI Manager', path: '' }]
  }
  public GetPageAction(): PageAction {
    return {
      addBtnText: 'add new ddi',
      iconName: 'icon-plus-circle',
      addFn: this.addUserAction,
      importFn: this.importAction,
      exportFn: this.exportAction
    };
  }

  public tableView = TableView[TableView.card];
  public items$: Observable<IInboundNumber[]>;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    super();
    this.items$ = this.store.pipe(select(getDdiManagersSelector));
  }

  ngOnInit(): void { }

  public onSearch(event: string = ''): void {
    if (event)
      this.items$ = this.store.pipe(debounceTime(500), select(filterDdiManagerelector(event)));
    else
      this.items$ = this.store.pipe(select(getDdiManagersSelector));
  }

  public onToggle(event: string): void {
    this.tableView = event;
  }

  public exportAction = () => {
    console.log('implement export');
  }

  public importAction = () => {
    console.log('implement import');
  }

  public addUserAction = () => {
    console.log('implement add user');
  }
}