import { Component, OnInit, Input } from '@angular/core';
import { CardType } from 'src/app/models/generic.model';
import { environment } from 'src/environments/environment';
import { IIvrMenu } from '../../models/ivr-menu.model';
import { GenericCardListComponent } from 'src/app/generics/generic-card-list';
import { EntityRoutes } from 'src/app/generics/generic.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'ivr-menu-list',
  templateUrl: './ivr-menu-list.component.html',
  styleUrls: ['./ivr-menu-list.component.scss']
})

export class IvrMenuListComponent extends GenericCardListComponent<IIvrMenu> implements OnInit {
  @Input()
  public nums: Array<{ text: string, active: boolean }>;
  constructor(public router: Router) {
    super(router, EntityRoutes.IvrRoute);
  }

  ngOnInit() { }
}