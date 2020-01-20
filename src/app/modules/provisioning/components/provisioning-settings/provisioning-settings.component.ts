import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'iv-provisioning-settings',
  templateUrl: './provisioning-settings.component.html',
  styleUrls: ['./provisioning-settings.component.scss']
})

export class ProvisioningSettingsComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      value: ['']
    });
  }

  ngOnInit() { }

  public isEventDialog: boolean = false;
  public expandPanel(pnl: any): void {
    event.stopPropagation(); 
    if(this.isEventDialog) {
      pnl.expanded = true;
      this.isEventDialog = false;
    } else {
      pnl.expanded = pnl.expanded;
    }
  }
}