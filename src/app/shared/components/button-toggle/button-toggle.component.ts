import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TableView } from 'src/app/models/generic.model';

@Component({
  selector: 'iv-button-toggle',
  templateUrl: './button-toggle.component.html',
  styleUrls: ['./button-toggle.component.scss']
})

export class ButtonToggleComponent implements OnInit {
  @Output()
  public toggleChange = new EventEmitter<TableView>();

  public selectedButton = TableView[TableView.card];
  constructor() { }

  ngOnInit() { }

  public onChange(event: any): void {
    this.toggleChange.emit(event.value)
  }
}