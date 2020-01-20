import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'iv-provisioning-general',
  templateUrl: './provisioning-general.component.html',
  styleUrls: ['./provisioning-general.component.scss']
})

export class ProvisioningGeneralComponent implements OnInit {
  @Input()
  public form: FormGroup;

  constructor() {}

  ngOnInit() { }
}