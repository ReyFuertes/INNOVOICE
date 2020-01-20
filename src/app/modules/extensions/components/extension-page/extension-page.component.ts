import { Component, OnInit } from '@angular/core';
import { TableView, ICrumb } from 'src/app/models/generic.model';
import { PageAction } from 'src/app/models/action';
import { GenericPageComponent } from 'src/app/shared/components/generic-component/generic-page.component';
import { Store, select } from '@ngrx/store';
import { tap, debounceTime } from 'rxjs/operators';
import { IExtension } from '../../models/extension';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/store/app.reducer';
import { getExtensionsSelector, filterExtensionSelector } from '../../store/extension.selector';

@Component({
  selector: 'iv-extension-page',
  templateUrl: './extension-page.component.html',
  styleUrls: ['./extension-page.component.scss']
})

export class ExtentionPageComponent extends GenericPageComponent implements OnInit {
  public GetCrumbs(): ICrumb[] {
    return [{ text: 'Extension', path: '' }]
  }
  public GetPageAction(): PageAction {
    return {
      addBtnText: 'add extension',
      iconName: 'icon-plus-circle',
      addFn: this.addAction,
      importFn: this.importAction,
      exportFn: this.exportAction
    };
  }

  public tableView = TableView[TableView.card];
  public items$: Observable<IExtension[]>;
  
  constructor(
    private store: Store<AppState>,
    private router: Router
  ) {
    super();
    this.items$ = this.store.pipe(select(getExtensionsSelector));
  }

  ngOnInit(): void { }

  public onSearch(event: string = ''): void {
    if (event)
      this.items$ = this.store.pipe(debounceTime(500), select(filterExtensionSelector(event)));
    else
      this.items$ = this.store.pipe(select(getExtensionsSelector));
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

  public addAction = () => {
    this.router.navigateByUrl('dashboard/pages/extensions/add');
  }
}