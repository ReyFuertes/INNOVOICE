import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iv-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {
  public menus: Array<{ label: string, value: string }> = [
    {
      label: 'RING GROUPS',
      value: 'RING GROUPS'
    },
    {
      label: 'IVR MENUS',
      value: 'IVR MENUS'
    }, {
      label: 'CONFERENCING',
      value: 'CONFERENCING'
    }, {
      label: 'TIME CONDITIONS',
      value: 'TIME CONDITIONS'
    }, {
      label: 'FOLLOW ME',
      value: 'FOLLOW ME'
    }, {
      label: 'VOICEMAIL',
      value: 'VOICEMAIL'
    }, {
      label: 'PROMPTS',
      value: 'PROMPTS'
    }
  ];
  constructor() { }

  ngOnInit(): void { }
}
