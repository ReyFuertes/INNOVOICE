/**
 * Based on Swagger docs currently available @ http://portainer.ring.cloud:3000/api
 */

import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/services/base.service';
import { ITenant } from '../models/tenant.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TenantService extends BaseService<ITenant> {
  constructor (http: HttpClient) {
    super(http, 'tenants');
  }
}
