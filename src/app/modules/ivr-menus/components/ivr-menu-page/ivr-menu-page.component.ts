import { Component, OnInit } from '@angular/core';
import { TableView, ICrumb } from 'src/app/models/generic.model';
import { PageAction } from 'src/app/models/action';
import { GenericPageComponent } from 'src/app/shared/components/generic-component/generic-page.component';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { IIvrMenu } from '../../models/ivr-menu.model';
import { AppState } from 'src/app/store/app.reducer';
import { getIvrMenusSelector, filterIvrMenuSelector } from '../../store/ivr-menu.selector';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'iv-menu-page',
  templateUrl: './ivr-menu-page.component.html',
  styleUrls: ['./ivr-menu-page.component.scss']
})

export class IvrMenuPageComponent extends GenericPageComponent implements OnInit {
  public GetCrumbs(): ICrumb[] {
    return [{ text: 'Ivr Menu', path: '' }]
  }
  public GetPageAction(): PageAction {
    return { addBtnText: 'add ivr menu', iconName: 'icon-plus-circle', addFn: this.doAction };
  }

  public items$: Observable<IIvrMenu[]>;
  public tableView = TableView[TableView.card];
  public nums: Array<{ text: string, active: boolean }> = [
    {
      text: '1',
      active: true
    },
    {
      text: '2',
      active: true
    },
    {
      text: '3',
      active: true
    }, {
      text: '4',
      active: true
    }, {
      text: '5',
      active: true
    }, {
      text: '6',
      active: false
    }, {
      text: '7',
      active: false
    }, {
      text: '8',
      active: false
    }, {
      text: '9',
      active: false
    }, {
      text: '*',
      active: false
    }, {
      text: '0',
      active: false
    }, {
      text: '#',
      active: false
    }
  ]

  constructor(
    private store: Store<AppState>
  ) {
    super();
    this.items$ = this.store.pipe(select(getIvrMenusSelector));
  }

  public onSearch(event: string = ''): void {
    if (event)
      this.items$ = this.store.pipe(debounceTime(500), select(filterIvrMenuSelector(event)));
    else
      this.items$ = this.store.pipe(select(getIvrMenusSelector));
  }

  private doAction(): void {
    console.log('doAction clicked');
  }

  ngOnInit() { }

  public onToggle(event: string): void {
    this.tableView = event;
  }
}