import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { DdiManagerState } from '../store/ddi-manager.reducer';
import { LoadDdiManager } from '../store/ddi-manager.action';

@Component({
  selector: 'iv-ddi-manager-container',
  templateUrl: './ddi-manager-container.component.html',
  styleUrls: ['./ddi-manager-container.component.scss']
})

export class DdiManagerContainerComponent implements OnInit {
  constructor(private store: Store<DdiManagerState>) {
    this.store.dispatch(LoadDdiManager());
  }

  ngOnInit(): void { }
}