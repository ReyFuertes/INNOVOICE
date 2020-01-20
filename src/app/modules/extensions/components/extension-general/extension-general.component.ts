import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { IExtension } from '../../models/extension';

@Component({
  selector: 'iv-extension-general',
  templateUrl: './extension-general.component.html',
  styleUrls: ['./extension-general.component.scss']
})

export class ExtensionGeneralComponent implements OnInit {
  @Input()
  public form: FormGroup;

  constructor() {}

  ngOnInit() { }
}