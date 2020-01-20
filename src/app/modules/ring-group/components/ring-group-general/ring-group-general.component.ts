import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'iv-ring-group-general',
  templateUrl: './ring-group-general.component.html',
  styleUrls: ['./ring-group-general.component.scss']
})

export class RingGroupGeneralComponent implements OnInit {
  @Input()
  public form: FormGroup;
  constructor() { }

  ngOnInit() { }
}