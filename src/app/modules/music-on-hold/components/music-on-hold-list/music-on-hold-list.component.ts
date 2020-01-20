import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CardType } from 'src/app/models/generic.model';
import { IMusicOnHold } from '../../models/music-on-hold.model';
import { GenericCardListComponent } from 'src/app/generics/generic-card-list';
import { Router } from '@angular/router';

@Component({
  selector: 'iv-music-on-hold-list',
  templateUrl: './music-on-hold-list.component.html',
  styleUrls: ['./music-on-hold-list.component.scss']
})

export class MusicOnHoldListComponent extends GenericCardListComponent<IMusicOnHold> implements OnInit {
  constructor(public router: Router) { 
    super(router);
  }

  ngOnInit() { }
}