import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'iv-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  host: { "(click)": "onClick()" }
})
export class ButtonComponent implements OnInit {
  @Input()
  public type: 'primary' | 'cancel' | 'default' | 'transparent' | 'close' = 'default';
  @Input()
  public text: string = 'Button text';
  @Input()
  public icon: string;
  @Input()
  public disabled: boolean = false;
  @Output()
  public redirect = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void { }

  public onClick(): void {
    this.redirect.emit();
  }
}
