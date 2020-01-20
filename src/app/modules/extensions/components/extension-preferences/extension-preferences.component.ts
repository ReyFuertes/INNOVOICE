import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'iv-extension-preferences',
  templateUrl: './extension-preferences.component.html',
  styleUrls: ['./extension-preferences.component.scss']
})

export class ExtensionPreferencesComponent implements OnInit {
  @Input()
  public form: FormGroup;
  
  constructor() { }

  ngOnInit() { }
}