import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'iv-ring-group-call-forwarding',
  templateUrl: './ring-group-call-forwarding.component.html',
  styleUrls: ['./ring-group-call-forwarding.component.scss']
})

export class RingGroupCallForwardingComponent implements OnInit {
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