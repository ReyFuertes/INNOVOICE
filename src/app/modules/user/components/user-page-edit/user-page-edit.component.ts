import { Component, OnInit } from '@angular/core';
import { PageAction } from 'src/app/models/action';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'iv-user-page-edit',
  templateUrl: './user-page-edit.component.html',
  styleUrls: ['user-page-edit.component.scss']
})

export class UserPageEditComponent implements OnInit {
  public GetPageAction(): PageAction {
    return {
      backBtnText: 'Back to Users',
      backFn: () => {
        this.router.navigateByUrl('/dashboard/pages/users');
      }
    };
  }
  public form: FormGroup;
  constructor(private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      value: ['']
    });
  }

  ngOnInit() { }

  public onSubmit(): void {}
}