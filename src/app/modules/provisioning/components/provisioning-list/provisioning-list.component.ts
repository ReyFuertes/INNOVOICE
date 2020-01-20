import { Component, OnInit, Input } from '@angular/core';
import { PillType } from 'src/app/models/generic.model';
import { GenericCardListComponent } from 'src/app/generics/generic-card-list';
import { Router } from '@angular/router';
import { EntityRoutes } from 'src/app/generics/generic.enum';
import { IProvisioning } from '../../provisioning.model';
import * as moment from 'moment';
@Component({
  selector: 'iv-provisioning-list',
  templateUrl: './provisioning-list.component.html',
  styleUrls: ['./provisioning-list.component.scss']
})

export class ProvisingListComponent extends GenericCardListComponent<IProvisioning> implements OnInit {
  @Input()
  public disabled: boolean = false;

  public pillType = PillType.default;
  
  constructor(public router: Router) {
    super(router, EntityRoutes.Provisioning);
  }

  ngOnInit() { }

  public getPillText(item: IProvisioning): any {
    return item.lines.length + (item.lines.length > 0 ? 'Device' : 'Devices');
  }

  public getTimeThreshold(item: IProvisioning): any {
    return moment().subtract(moment(item.created_at).minutes(), 'm').fromNow();
  }
}
