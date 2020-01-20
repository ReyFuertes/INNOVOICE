import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'iv-extension-identity',
  templateUrl: './extension-identity.component.html',
  styleUrls: ['./extension-identity.component.scss']
})

export class ExtensionIdentityComponent implements OnInit {
  @Input()
  public form: FormGroup;
  
  constructor() { }

  ngOnInit() { }
}