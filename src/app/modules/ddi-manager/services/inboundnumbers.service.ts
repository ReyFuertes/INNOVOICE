/**
 * Based on Swagger docs currently available @ http://portainer.ring.cloud:3000/api
 */
import { HttpClient } from '@angular/common/http';
import { IInboundNumber } from '../models/inbound.number';
import { BaseService } from 'src/app/services/base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InboundNumbersService extends BaseService<IInboundNumber> {
  constructor(http: HttpClient) {
    super(http, 'inboundnumbers');
  }
}
