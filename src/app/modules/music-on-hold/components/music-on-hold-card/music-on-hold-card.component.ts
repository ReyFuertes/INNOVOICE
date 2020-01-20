import { Component, OnInit, Input } from '@angular/core';
import { IMusicOnHold } from '../../models/music-on-hold.model';
import { GenericCardListComponent } from 'src/app/generics/generic-card-list';
import { EntityRoutes } from 'src/app/generics/generic.enum';
import { Router } from '@angular/router';

@Component({
  selector: 'iv-music-on-hold-card',
  templateUrl: './music-on-hold-card.component.html',
  styleUrls: ['./music-on-hold-card.component.scss']
})

export class MusicOnHoldCardComponent extends GenericCardListComponent<IMusicOnHold> implements OnInit {
  constructor(public router: Router) { 
    super(router);
  }

  ngOnInit() { }
}