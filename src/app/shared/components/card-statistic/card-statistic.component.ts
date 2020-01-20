import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iv-card-statistic',
  templateUrl: './card-statistic.component.html',
  styleUrls: ['./card-statistic.component.scss']
})
export class CardStatisticComponent implements OnInit {
  @Input()
  public type: 'primary' | 'secondary' | 'success' | 'default' = 'default';
  @Input()
  public title: string;
  @Input()
  public day: 'yesterday' | 'today' | 'tomorrow' | 'this week' | 'this month' | 'this year';
  @Input()
  public amount: string | number;
  @Input()
  public label: string;

  constructor() { }

  ngOnInit() { }
}