import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'iv-link',
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss'],
  host: { "(click)": "onClick()" }
})

export class LinkComponent implements OnInit {
  @Input()
  public target: '_blank' | '_self' = '_self';
  @Input()
  public text: string;
  @Output()
  public redirect = new EventEmitter<any>();

  constructor() { }

  ngOnInit() { }

  public onClick(): void {
    this.redirect.emit();
  }

}