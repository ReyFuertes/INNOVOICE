/**
 * Based on Swagger docs currently available @ http://portainer.ring.cloud:3000/api
 */

import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/services/base.service';
import { IReseller } from '../models/reseller.model';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ResellerService extends BaseService<IReseller> {
  constructor (http: HttpClient) {
    super(http, 'resellers');
  }
}