import { Component, OnInit, Input } from '@angular/core';
import { PillType } from 'src/app/models/generic.model';
import { GenericCardListComponent } from 'src/app/generics/generic-card-list';
import { Router } from '@angular/router';
import { IProvisioning } from '../../provisioning.model';
import { EntityRoutes } from 'src/app/generics/generic.enum';
import * as moment from 'moment';
@Component({
  selector: 'iv-provisioning-card',
  templateUrl: './provisioning-card.component.html',
  styleUrls: ['./provisioning-card.component.scss']
})

export class ProvisioningCardComponent extends GenericCardListComponent<IProvisioning> implements OnInit {
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