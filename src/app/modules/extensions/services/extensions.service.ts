/**
 * Based on Swagger docs currently available @ http://portainer.ring.cloud:3000/api
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IExtension } from '../models/extension';
import { BaseService } from 'src/app/services/base.service';

@Injectable({
  providedIn: 'root'
})
export class ExtensionsService extends BaseService<IExtension> {
  constructor (http: HttpClient) {
    super(http, 'extensions');
  }
}
