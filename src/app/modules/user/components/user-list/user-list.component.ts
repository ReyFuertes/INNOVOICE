import { Component, OnInit, Input } from '@angular/core';
import { PillType } from 'src/app/models/generic.model';
import { IUser, UserRoles } from '../../user.model';
import { GenericCardListComponent } from 'src/app/generics/generic-card-list';
import { Router } from '@angular/router';
import { EntityRoutes } from 'src/app/generics/generic.enum';

@Component({
  selector: 'iv-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent extends GenericCardListComponent<IUser> implements OnInit {
  @Input()
  public disabled: boolean = false;
  public userRoles = UserRoles;
  public pillType = PillType.default;

  constructor(public router: Router) {
    super(router, EntityRoutes.User);
   }

  ngOnInit() { }
}