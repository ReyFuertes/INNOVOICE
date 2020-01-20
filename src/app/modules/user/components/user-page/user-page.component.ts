import { Component, OnInit } from '@angular/core';
import { GenericPageComponent } from 'src/app/shared/components/generic-component/generic-page.component';
import { ICrumb, TableView } from 'src/app/models/generic.model';
import { PageAction } from 'src/app/models/action';
import { Observable } from 'rxjs';
import { IUser } from '../../user.model';
import { Store, select } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { debounceTime } from 'rxjs/operators';
import { filterUserSelector, getUserItemsSelector } from '../../store/user.selector';

@Component({
  selector: 'iv-user-page',
  templateUrl: './user-page.component.html',
  styleUrls: ['./user-page.component.scss']
})

export class UserPageComponent extends GenericPageComponent implements OnInit {
  public GetCrumbs(): ICrumb[] {
    return [{ text: 'User', path: '' }]
  }
  public GetPageAction(): PageAction {
    return {
      addBtnText: 'add user',
      iconName: 'icon-plus-circle',
      addFn: this.addUserAction,
      importFn: this.importAction,
      exportFn: this.exportAction
    };
  }
  public items$: Observable<IUser[]>;
  constructor(private store: Store<AppState>) {
    super();
  }

  public onSearch(event: string = ''): void {
    if (event)
      this.items$ = this.store.pipe(debounceTime(500), select(filterUserSelector(event)));
    else
      this.items$ = this.store.pipe(select(getUserItemsSelector));
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

  public tableView = TableView[TableView.card];

  ngOnInit(): void { }

  public onToggle(event: string): void {
    this.tableView = event;
  }
}