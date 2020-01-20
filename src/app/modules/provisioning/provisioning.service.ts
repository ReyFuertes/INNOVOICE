/**
 * Based on Swagger docs currently available @ http://portainer.ring.cloud:3000/api
 */

import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/services/base.service';
import { Injectable } from '@angular/core';
import { IProvisioning } from './provisioning.model';

@Injectable({
  providedIn: 'root'
})
export class ProvisioningService extends BaseService<IProvisioning> {
  constructor(http: HttpClient) {
    super(http, 'devices');
  }
}
