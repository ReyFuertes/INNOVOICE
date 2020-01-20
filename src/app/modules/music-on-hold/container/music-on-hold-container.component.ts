import { Component, OnInit } from '@angular/core';
import { GenericPageComponent } from 'src/app/shared/components/generic-component/generic-page.component';
import { ICrumb, TableView } from 'src/app/models/generic.model';
import { PageAction } from 'src/app/models/action';
import { Store } from '@ngrx/store';
import { LoadMusicOnHold } from '../store/music-on-hold.action';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'iv-music-on-hold-container',
  templateUrl: './music-on-hold-container.component.html',
  styleUrls: ['./music-on-hold-container.component.scss']
})

export class MusicOnHoldContainerComponent extends GenericPageComponent implements OnInit {
  public GetCrumbs(): ICrumb[] {
    return [{ text: 'Music On Hold', path: '' }]
  }
  public GetPageAction(): PageAction {
    return { addBtnText: 'upload', iconName: 'icon-plus-circle', addFn: () => { } };
  }

  constructor(private store: Store<AppState>) {
    super();
    this.store.dispatch(LoadMusicOnHold());
  }

  ngOnInit() { }
}