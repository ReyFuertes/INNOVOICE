import { Component, OnInit, Input } from '@angular/core';
import { GenericCardListComponent } from 'src/app/generics/generic-card-list';
import { Router } from '@angular/router';
import { EntityRoutes } from 'src/app/generics/generic.enum';
import { IFollowMe } from '../../follow-me.model';
@Component({
  selector: 'iv-follow-me-card',
  templateUrl: './follow-me-card.component.html',
  styleUrls: ['./follow-me-card.component.scss']
})

export class FollowMeCardComponent extends GenericCardListComponent<IFollowMe> implements OnInit {
  @Input()
  public title: string;
  @Input()
  public status: 'divert' | 'busy' = null;

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