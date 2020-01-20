import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iv-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss']
})

export class CheckboxComponent implements OnInit {
  @Input()
  public text: string;
  
  constructor() { }

  ngOnInit() { }
}