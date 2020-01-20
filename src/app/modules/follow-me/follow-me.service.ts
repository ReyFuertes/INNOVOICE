/**
 * Based on Swagger docs currently available @ http://portainer.ring.cloud:3000/api
 */

import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/services/base.service';
import { Injectable } from '@angular/core';
import { IFollowMe } from './follow-me.model';

@Injectable({
  providedIn: 'root'
})
export class FollowMeService extends BaseService<IFollowMe> {
  constructor(http: HttpClient) {
    super(http, 'follow-me');
  }
}
