import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iv-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})

export class IconComponent implements OnInit {
  @Input()
  public iconTypeClass: string = '';
  @Input()
  public icon: string = '';

  constructor() { }

  ngOnInit() { }
}