import { Component, OnInit } from '@angular/core';
import { GenericPageComponent } from 'src/app/shared/components/generic-component/generic-page.component';
import { ICrumb } from 'src/app/models/generic.model';
import { PageAction } from 'src/app/models/action';
import { AppState } from 'src/app/store/app.reducer';
import { Store } from '@ngrx/store';
import { LoadUsers } from '../store/user.action';

@Component({
  selector: 'iv-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss']
})

export class UserContainerComponent extends GenericPageComponent implements OnInit {
  public GetCrumbs(): ICrumb[] {
    return [{ text: 'Users', path: '' }]
  }
  public GetPageAction(): PageAction {
    return null;
  }

  constructor(private store: Store<AppState>) {
    super();
    this.store.dispatch(LoadUsers());
  }
  ngOnInit(): void { }

}