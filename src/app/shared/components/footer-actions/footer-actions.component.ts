import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'iv-footer-actions',
  templateUrl: './footer-actions.component.html',
  styleUrls: ['./footer-actions.component.scss']
})

export class FooterActionsComponent implements OnInit {
  @Input()
  public toggle: boolean = false;
  constructor() { }

  ngOnInit() { }
}