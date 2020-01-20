import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IInboundNumber } from '../../models/inbound.number';
import { GenericCardListComponent } from 'src/app/generics/generic-card-list';
import { EntityRoutes } from 'src/app/generics/generic.enum';

@Component({
  selector: 'iv-ddi-manager-card',
  templateUrl: './ddi-manager-card.component.html',
  styleUrls: ['./ddi-manager-card.component.scss']
})

export class DdiManagerCardComponent extends GenericCardListComponent<IInboundNumber> implements OnInit {
  public pillArr: Array<{ text: string }> = [{
    text: '9am – 5pm'
  },
  {
    text: 'IVR: Sales'
  },
  {
    text: 'Ring Group'
  }]

  constructor(public router: Router) {
    super(router, EntityRoutes.DdiManager);
  }

  ngOnInit() { }
}