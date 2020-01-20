import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'iv-ivr-advanced',
  templateUrl: './ivr-advanced.component.html',
  styleUrls: ['./ivr-advanced.component.scss']
})

export class IvrAdvancedComponent implements OnInit {
  @Input()
  public form: FormGroup;
  
  constructor() { }

  ngOnInit() { }
}