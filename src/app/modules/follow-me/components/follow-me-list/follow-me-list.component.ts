import { Component, OnInit, Input } from '@angular/core';
import { PillType } from 'src/app/models/generic.model';
import { GenericCardListComponent } from 'src/app/generics/generic-card-list';
import { Router } from '@angular/router';
import { EntityRoutes } from 'src/app/generics/generic.enum';
import { IFollowMe } from '../../follow-me.model';

@Component({
  selector: 'iv-follow-me-list',
  templateUrl: './follow-me-list.component.html',
  styleUrls: ['./follow-me-list.component.scss']
})

export class FollowMeListComponent extends GenericCardListComponent<IFollowMe> implements OnInit {
  @Input()
  public title: string;
  @Input()
  public name: string;
  @Input()
  public disabled: boolean = false;
  @Input()
  public status: 'divert' | 'busy' = null;

  public pillType = PillType.default;
  public pillArr: Array<{ text: string }> = [{
    text: '201'
  },
  {
    text: '01202 987654'
  },
  {
    text: '203'
  },
  {
    text: '07989 142356'
  }]

  constructor(public router: Router) {
    super(router, EntityRoutes.FollowMe);
  }

  ngOnInit() { }
}