import { Component, OnInit, Input } from '@angular/core';
import { PillType, Pill } from 'src/app/models/generic.model';

@Component({
  selector: 'iv-pill',
  templateUrl: './pill.component.html',
  styleUrls: ['./pill.component.scss']
})
export class PillComponent implements OnInit {
  @Input()
  public type: PillType = PillType.default;
  @Input()
  public text: string;
  @Input()
  public icon: string;
  @Input()
  public width: string;
  @Input()
  public isBold: boolean = true;

  constructor() { }

  ngOnInit(): void { }
}
