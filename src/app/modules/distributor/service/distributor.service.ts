/**
 * Based on Swagger docs currently available @ http://portainer.ring.cloud:3000/api
 */

import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/services/base.service';
import { IDistributor } from '../models/distributor.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DistributorsService extends BaseService<IDistributor> {
  constructor(http: HttpClient) {
    super(http, 'distributors');
  }
}
