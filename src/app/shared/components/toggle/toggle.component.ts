import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iv-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  @Input()
  public toggle: boolean = false;

  constructor() { }

  ngOnInit(): void { }

  public onToggleChange(): void {
    this.toggle = !this.toggle;
  }
}
