import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { RingGroupState } from '../store/ring-group.reducer';
import { LoadRingGroup } from '../store/ring-group.action';

@Component({
  selector: 'iv-ring-group-container',
  templateUrl: './ring-group-container.component.html',
  styleUrls: ['./ring-group-container.component.scss']
})

export class RingGroupContainerComponent implements OnInit {
  constructor(private store: Store<RingGroupState>) {
    this.store.dispatch(LoadRingGroup());
  }

  ngOnInit(): void { }
}
