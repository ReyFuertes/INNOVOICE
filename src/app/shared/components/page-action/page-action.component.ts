import { Component, OnInit, Input } from '@angular/core';
import { PageAction } from 'src/app/models/action';

@Component({
  selector: 'iv-page-action',
  templateUrl: './page-action.component.html',
  styleUrls: ['./page-action.component.scss']
})

export class PageActionComponent implements OnInit {
  public _action: PageAction;
  @Input()
  public set action(action: PageAction) {
    if (action) {
      this._action = action;
    }
  }

  constructor() { }

  ngOnInit() { }

  public add(action: PageAction) {
    action.addFn();
  }
}