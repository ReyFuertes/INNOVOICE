/**
 * Based on Swagger docs currently available @ http://portainer.ring.cloud:3000/api
 */

import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/services/base.service';
import { Injectable } from '@angular/core';
import { IMusicOnHold } from '../models/music-on-hold.model';

@Injectable({
  providedIn: 'root'
})
export class MusicOnHoldService extends BaseService<IMusicOnHold> {
  constructor(http: HttpClient) {
    super(http, 'musiconhold');
  }
}
