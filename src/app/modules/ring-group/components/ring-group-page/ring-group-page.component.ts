import { Component, OnInit } from '@angular/core';
import { GenericPageComponent } from 'src/app/shared/components/generic-component/generic-page.component';
import { ICrumb, TableView } from 'src/app/models/generic.model';
import { PageAction } from 'src/app/models/action';
import { IRingGroup } from '../../models/ring-group.model';
import { Store, select } from '@ngrx/store';
import { RingGroupState } from '../../store/ring-group.reducer';
import { Router } from '@angular/router';
import { filterRingGroupSelector, getRingGroupsSelector } from '../../store/ring-group.selector';
import { tap, debounceTime } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'iv-ring-group-page',
  templateUrl: './ring-group-page.component.html',
  styleUrls: ['./ring-group-page.component.scss']
})

export class RingGroupPageComponent extends GenericPageComponent implements OnInit {
  public GetCrumbs(): ICrumb[] {
    return [{ text: 'Ring Groups', path: '' }]
  }
  public GetPageAction(): PageAction {
    return { 
      addBtnText: 'add ring group', 
      iconName: 'icon-plus-circle',
      addFn: this.addUserAction
    };
  }

  public addUserAction = () => {
    console.log('implement add user');
  }

  public items$: Observable<IRingGroup[]>;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    super();
    this.items$ = this.store.pipe(select(getRingGroupsSelector));
  }

  public tableView = TableView[TableView.card];

  ngOnInit(): void { }

  public onSearch(event: string = ''): void {
    if (event)
      this.items$ = this.store.pipe(debounceTime(500), select(filterRingGroupSelector(event)));
    else
      this.items$ = this.store.pipe(select(getRingGroupsSelector));
  }

  public onToggle(event: string): void {
    this.tableView = event;
  }
}