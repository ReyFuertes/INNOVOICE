import { Component, OnInit, Input } from '@angular/core';
import { GenericCardListComponent } from 'src/app/generics/generic-card-list';
import { Router } from '@angular/router';
import { EntityRoutes } from 'src/app/generics/generic.enum';
import { IUser, UserRoles } from '../../user.model';

@Component({
  selector: 'iv-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})

export class UserComponent extends GenericCardListComponent<IUser> implements OnInit {
  public userRoles = UserRoles;
  constructor(public router: Router) {
    super(router, EntityRoutes.User); 
   }

  ngOnInit() { }
}