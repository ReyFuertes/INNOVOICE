import { Component, OnInit } from '@angular/core';
import { ICrumb, TableView } from 'src/app/models/generic.model';
import { PageAction } from 'src/app/models/action';
import { GenericPageComponent } from 'src/app/shared/components/generic-component/generic-page.component';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';
import { Store, select } from '@ngrx/store';
import { getFollowMesSelector, filterFollowMeSelector } from '../../store/follow-me.selector';
import { debounceTime } from 'rxjs/operators';
import { IFollowMe } from '../../follow-me.model';

@Component({
  selector: 'iv-follow-me-page',
  templateUrl: './follow-me-page.component.html',
  styleUrls: ['./follow-me-page.component.scss']
})

export class FollowMePageComponent extends GenericPageComponent implements OnInit {
  public GetCrumbs(): ICrumb[] {
    return [{ text: 'Follow me', path: '' }]
  }
  public GetPageAction(): PageAction {
    return null;
  }

  public tableView = TableView[TableView.card];
  public items$: Observable<IFollowMe[]>;

  constructor(private store: Store<AppState>) {
    super();
    this.items$ = this.store.pipe(select(getFollowMesSelector));
  }
  ngOnInit() { }

  public onSearch(event: string = ''): void {
    if (event)
      this.items$ = this.store.pipe(debounceTime(500), select(filterFollowMeSelector(event)));
    else
      this.items$ = this.store.pipe(select(getFollowMesSelector));
  }

  public onToggle(event: string): void {
    this.tableView = event;
  }
}