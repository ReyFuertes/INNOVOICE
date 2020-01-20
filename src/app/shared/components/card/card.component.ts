import { Component, OnInit, Input } from '@angular/core';
@Component({
  selector: 'iv-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input()
  public type: 'primary' | 'secondary' | 'success' | 'default' = 'default';

  constructor() { }

  ngOnInit(): void { }
}
