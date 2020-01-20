import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'iv-right-nav',
  templateUrl: './right-nav.component.html',
  styleUrls: ['./right-nav.component.scss']
})
export class RightNavComponent implements OnInit {
  @Output()
  public toggleEmitter = new EventEmitter<boolean>();

  public menus: Array<{label: string, value: string}> = [
    {
      label: 'follow me',
      value: 'follow me'
    },
    {
      label: 'ivr menus',
      value: 'ivr menus'
    },
    {
      label: 'music on hold',
      value: 'music on hold'
    },
    {
      label: 'ring groups',
      value: 'ring groups'
    },
    {
      label: 'sounds',
      value: 'sounds'
    },
    {
      label: 'time conditions',
      value: 'time conditions'
    },
    {
      label: 'voicemail',
      value: 'voicemail'
    }
  ];

  constructor() { }

  ngOnInit(): void { }
}
