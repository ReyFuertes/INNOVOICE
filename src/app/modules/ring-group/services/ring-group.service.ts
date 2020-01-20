/**
 * Based on Swagger docs currently available @ http://portainer.ring.cloud:3000/api
 */
import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/services/base.service';
import { Injectable } from '@angular/core';
import { IRingGroup } from '../models/ring-group.model';

@Injectable({
  providedIn: 'root'
})
export class RingGroupService extends BaseService<IRingGroup> {
  constructor(http: HttpClient) {
    super(http, 'ringgroups');
  }
}
