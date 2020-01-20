import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'iv-ddi-manager-advance',
  templateUrl: './ddi-manager-advance.component.html',
  styleUrls: ['./ddi-manager-advance.component.scss']
})

export class DdiManagerAdvanceComponent implements OnInit {
  @Input()
  public form: FormGroup;
  constructor() { }

  ngOnInit() { }
}