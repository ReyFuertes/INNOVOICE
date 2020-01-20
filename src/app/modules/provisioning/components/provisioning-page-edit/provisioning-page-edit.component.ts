import { Component, OnInit } from '@angular/core';
import { PageAction } from 'src/app/models/action';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'iv-provisioning-page-edit',
  templateUrl: './provisioning-page-edit.component.html',
  styleUrls: ['./provisioning-page-edit.component.scss']
})

export class ProvisioningPageEditComponent implements OnInit {
  public GetPageAction(): PageAction {
    return {
      backBtnText: 'Back to Provisioning',
      backFn: () => {
        this.router.navigateByUrl('/dashboard/pages/provisioning');
      }
    };
  }
  public form: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      id: [''],
      domain_uuid: [''],
      mac_address: [''],
      device_label: [''],
      description: [''],
      vendor: [''],
      model: [''],
      firmware: [''],
      username: [''],
      password: [''],
      template: [''],
      lines: [null],
      keys: [null],
      settings: [null],
      profiles: [''],
      enabled: [null],
      created_at: [null],
      updated_at: [null]
    });
  }

  ngOnInit() { }

  public onSubmit(): void { }
}
