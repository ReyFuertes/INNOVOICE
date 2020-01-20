import { Component, OnInit, Input } from '@angular/core';
import { PageAction } from 'src/app/models/action';

@Component({
  selector: 'iv-back',
  templateUrl: './back.component.html',
  styleUrls: ['./back.component.scss']
})

export class BackComponent implements OnInit {
  public _action: PageAction;
  @Input()
  public set action(action: PageAction) {
    if (action) {
      this._action = action;
    }
  }

  constructor() { }

  ngOnInit() { }

  public back(action: PageAction) {
    action.backFn();
  }
}