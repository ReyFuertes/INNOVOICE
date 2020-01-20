import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IRingGroup } from '../../models/ring-group.model';
import { GenericCardListComponent } from 'src/app/generics/generic-card-list';
import { EntityRoutes } from 'src/app/generics/generic.enum';

@Component({
  selector: 'iv-card-ring-group',
  templateUrl: './ring-group-card.component.html',
  styleUrls: ['./ring-group-card.component.scss']
})

export class RingGroupCardComponent extends GenericCardListComponent<IRingGroup> implements OnInit {
  constructor(public router: Router) {
    super(router, EntityRoutes.RingGroup);
  }

  ngOnInit() { }
}