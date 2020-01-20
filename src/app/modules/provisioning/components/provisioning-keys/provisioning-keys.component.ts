import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'iv-provisioning-keys',
  templateUrl: './provisioning-keys.component.html',
  styleUrls: ['./provisioning-keys.component.scss']
})

export class ProvisioningKeysComponent implements OnInit {
  public form: FormGroup;
  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      value: ['']
    });
  }

  ngOnInit() { }
}