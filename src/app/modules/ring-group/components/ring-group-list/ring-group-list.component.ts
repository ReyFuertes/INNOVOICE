import { Component, OnInit, Input } from '@angular/core';
import { IRingGroup } from '../../models/ring-group.model';
import { GenericCardListComponent } from 'src/app/generics/generic-card-list';
import { EntityRoutes } from 'src/app/generics/generic.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'iv-ring-group-list',
  templateUrl: './ring-group-list.component.html',
  styleUrls: ['./ring-group-list.component.scss']
})

export class RingGroupListComponent extends GenericCardListComponent<IRingGroup> implements OnInit {
  constructor(public router: Router) {
    super(router, EntityRoutes.RingGroup);
  }

  ngOnInit() { }
}