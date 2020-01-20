import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';
import { LoadFollowMe } from '../store/follow-me.action';

@Component({
  selector: 'iv-follow-me-container',
  templateUrl: './follow-me-container.component.html',
  styleUrls: ['./follow-me-container.component.scss']
})

export class FollowMeContainerComponent implements OnInit {
  constructor(private store: Store<AppState>) {
    this.store.dispatch(LoadFollowMe());
  }

  ngOnInit() { }
}