import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'iv-ddi-manager-general',
  templateUrl: './ddi-manager-general.component.html',
  styleUrls: ['./ddi-manager-general.component.scss']
})

export class DdiManagerGeneralComponent implements OnInit {
  @Input()
  public form: FormGroup;
  constructor() { }

  ngOnInit() {}
}