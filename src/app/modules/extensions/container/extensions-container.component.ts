import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LoadExtension } from '../store/extension.action';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'iv-extensions-container',
  templateUrl: './extensions-container.component.html',
  styleUrls: ['./extensions-container.component.scss']
})
export class ExtensionsContainerComponent implements OnInit {
  constructor(private store: Store<AppState>) {
    this.store.dispatch(LoadExtension());
  }

  ngOnInit(): void { }
}
