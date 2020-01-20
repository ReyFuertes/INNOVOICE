/**
 * Based on Swagger docs currently available @ http://portainer.ring.cloud:3000/api
 */

import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/services/base.service';
import { Injectable } from '@angular/core';
import { IIvrMenu } from './models/ivr-menu.model';

@Injectable({
  providedIn: 'root'
})
export class IvrMenuService extends BaseService<IIvrMenu> {
  constructor(http: HttpClient) {
    super(http, 'ivrs');
  }
}
