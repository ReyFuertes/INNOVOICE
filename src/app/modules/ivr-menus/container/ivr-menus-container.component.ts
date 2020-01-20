import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { LoadIvrMenu } from '../store/ivr-menu.action';

@Component({
  selector: 'iv-ivr-menus-container',
  templateUrl: './ivr-menus-container.component.html',
  styleUrls: ['./ivr-menus-container.component.scss']
})

export class IvrMenuContainerComponent implements OnInit {
  constructor(private store: Store<AppState>) {
    this.store.dispatch(LoadIvrMenu());
  }

  ngOnInit() { }
}