import { Component, OnInit } from '@angular/core';
import { LoadProvisioning } from '../store/provisioning.action';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.reducer';

@Component({
  selector: 'iv-provisioning',
  templateUrl: './provisioning-container.component.html'
})

export class ProvisioningContainerComponent  implements OnInit {
  constructor(private store: Store<AppState>) {
    this.store.dispatch(LoadProvisioning());
  }


  ngOnInit() { }
}