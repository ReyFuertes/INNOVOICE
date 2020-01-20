import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iv-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnInit {
  @Input()
  public placeholder: string;
  @Input()
  public label: string = 'label here'
  @Input()
  public items: Array<{label: string, value: string}>;
  @Input()
  public isSmall: boolean = true;
  @Input()
  public minWidth: string = '100%';

  constructor() { }

  ngOnInit(): void { }
}
