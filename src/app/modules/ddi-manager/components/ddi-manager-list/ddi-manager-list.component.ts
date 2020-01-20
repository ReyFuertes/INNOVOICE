import { Component, OnInit, Input } from '@angular/core';
import { CardType } from 'src/app/models/generic.model';
import { environment } from 'src/environments/environment';
import { IInboundNumber } from '../../models/inbound.number';
import { GenericCardListComponent } from 'src/app/generics/generic-card-list';
import { Router } from '@angular/router';
import { EntityRoutes } from 'src/app/generics/generic.enum';

@Component({
  selector: 'iv-ddi-manager-list',
  templateUrl: './ddi-manager-list.component.html',
  styleUrls: ['./ddi-manager-list.component.scss']
})

export class DdiManagerListComponent extends GenericCardListComponent<IInboundNumber> implements OnInit {
  public pills: any;
  constructor(public router: Router) {
    super(router, EntityRoutes.DdiManager);
   }

  ngOnInit() { }
}