import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'iv-provisioning-profile',
  templateUrl: './provisioning-profile.component.html',
  styleUrls: ['./provisioning-profile.component.scss']
})

export class ProvisioningProfileComponent implements OnInit {
  @Input()
  public form: FormGroup;
  constructor() { }

  ngOnInit() { }
}