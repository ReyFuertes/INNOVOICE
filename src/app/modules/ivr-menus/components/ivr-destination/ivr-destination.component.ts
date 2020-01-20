import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'iv-ivr-destination',
  templateUrl: './ivr-destination.component.html',
  styleUrls: ['./ivr-destination.component.scss']
})

export class IvrDestinationComponent implements OnInit {
  @Input()
  public form: FormGroup;

  public nums: Array<{ text: string, active: boolean }> = [
    {
      text: '1',
      active: true
    },
    {
      text: '2',
      active: true
    },
    {
      text: '3',
      active: true
    }, {
      text: '4',
      active: true
    }, {
      text: '5',
      active: true
    }, {
      text: '6',
      active: false
    }, {
      text: '7',
      active: false
    }, {
      text: '8',
      active: false
    }, {
      text: '9',
      active: false
    }, {
      text: '*',
      active: false
    }, {
      text: '0',
      active: false
    }, {
      text: '#',
      active: false
    }
  ]
  public showDialog: boolean = false;

  constructor() { }

  ngOnInit() { }
}