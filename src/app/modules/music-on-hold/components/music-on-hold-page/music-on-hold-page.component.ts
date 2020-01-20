import { Component, OnInit, Input } from '@angular/core';
import { ICrumb, TableView } from 'src/app/models/generic.model';
import { PageAction } from 'src/app/models/action';
import { GenericPageComponent } from 'src/app/shared/components/generic-component/generic-page.component';
import { Store, select } from '@ngrx/store';
import { Router } from '@angular/router';
import { tap, debounceTime } from 'rxjs/operators';
import { IMusicOnHold } from '../../models/music-on-hold.model';
import { MusicOnHoldState } from '../../store/music-on-hold.reducer';
import { getMusicOnHoldItemsSelector, filterMusicOnHoldSelector } from '../../store/music-on-hold.selector';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'iv-music-on-hold-page',
  templateUrl: './music-on-hold-page.component.html',
  styleUrls: ['./music-on-hold-page.component.scss']
})

export class MusicOnHoldPageComponent extends GenericPageComponent implements OnInit {
  public GetCrumbs(): ICrumb[] {
    return [{ text: 'Music On Hold', path: '' }]
  }
  public GetPageAction(): PageAction {
    return {
      addBtnText: 'add new music',
      iconName: 'icon-plus-circle',
      addFn: this.addUserAction,
      importFn: this.importAction,
      exportFn: this.exportAction
    };
  }

  public tableView = TableView[TableView.card];
  public items$: Observable<IMusicOnHold[]>;

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    super();
    this.items$ = this.store.pipe(select(getMusicOnHoldItemsSelector));
  }

  ngOnInit(): void { }

  public onSearch(event: string = ''): void {
    if (event)
      this.items$ = this.store.pipe(debounceTime(500), select(filterMusicOnHoldSelector(event)));
    else
      this.items$ = this.store.pipe(select(getMusicOnHoldItemsSelector));
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