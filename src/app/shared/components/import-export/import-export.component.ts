import { Component, OnInit, Input } from '@angular/core';
import { PageAction } from 'src/app/models/action';

@Component({
  selector: 'iv-import-export',
  templateUrl: './import-export.component.html',
  styleUrls: ['./import-export.component.scss']
})

export class ImportExportComponent implements OnInit {
  public _action: PageAction;
  @Input()
  public set action(action: PageAction) {
    if (action) {
      this._action = action;
    }
  }

  constructor() { }

  ngOnInit() { }

  public import(action: PageAction) {
    action.importFn();
  }

  public export(action: PageAction) {
    action.exportFn();
  }
}