import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'iv-ivr-greetings',
  templateUrl: './ivr-greetings.component.html',
  styleUrls: ['./ivr-greetings.component.scss']
})

export class IvrGreetingsComponent implements OnInit {
  @Input()
  public form: FormGroup;

  constructor() {}

  ngOnInit() { }
}