import { Component, OnInit, Input } from '@angular/core';
import { IIvrMenu } from '../../models/ivr-menu.model';
import { GenericCardListComponent } from 'src/app/generics/generic-card-list';
import { Router } from '@angular/router';
import { EntityRoutes } from 'src/app/generics/generic.enum';

@Component({
  selector: 'iv-ivr-menu-card',
  templateUrl: './ivr-menu-card.component.html',
  styleUrls: ['./ivr-menu-card.component.scss']
})

export class IveMenuCardComponent extends GenericCardListComponent<IIvrMenu> implements OnInit {
  @Input()
  public nums: Array<{ text: string, active: boolean }>;

  constructor(public router: Router) {
    super(router, EntityRoutes.IvrRoute);
  }

  ngOnInit() { }


}