import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'iv-ddi-manager-routing',
  templateUrl: './ddi-manager-routing.component.html',
  styleUrls: ['./ddi-manager-routing.component.scss']
})

export class ManagerRoutingComponent implements OnInit {
  @Input()
  public form: FormGroup;
  constructor() { }

  ngOnInit() { }
}