/**
 * Based on Swagger docs currently available @ http://portainer.ring.cloud:3000/api
 */

import { HttpClient } from '@angular/common/http';
import { BaseService } from 'src/app/services/base.service';
import { Injectable } from '@angular/core';
import { IVoiceMail } from '../models/voice-mail.model';

@Injectable({
  providedIn: 'root'
})
export class VoiceMailService extends BaseService<IVoiceMail> {
  constructor(http: HttpClient) {
    super(http, 'voicemails');
  }
}
