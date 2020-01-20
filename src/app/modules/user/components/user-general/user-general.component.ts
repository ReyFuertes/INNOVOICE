import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'iv-user-general',
  templateUrl: './user-general.component.html',
  styleUrls: ['./user-general.component.scss']
})

export class UserGeneralComponent implements OnInit {
  @Input()
  public form: FormGroup;

  constructor() { }

  ngOnInit() { }

  public isEventDialog: boolean = false;
  public expandPanel(pnl: any): void {
    event.stopPropagation(); 
    if(this.isEventDialog) {
      pnl.expanded = true;
      this.isEventDialog = false;
    } else {
      pnl.expanded = pnl.expanded;
    }
  }
}