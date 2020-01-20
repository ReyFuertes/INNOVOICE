import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'iv-ivr-general',
  templateUrl: './ivr-general.component.html',
  styleUrls: ['./ivr-general.component.scss']
})

export class IvrGeneralComponent implements OnInit {
  @Input()
  public form: FormGroup;

  constructor() {}

  ngOnInit() { }
}