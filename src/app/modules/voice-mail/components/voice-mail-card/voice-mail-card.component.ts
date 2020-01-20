import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { VoiceMailStatus, IVoiceMail } from '../../models/voice-mail.model';
import { CardType } from 'src/app/models/generic.model';
import { Router } from '@angular/router';
import { GenericCardListComponent } from 'src/app/generics/generic-card-list';
import { EntityRoutes } from 'src/app/generics/generic.enum';

@Component({
  selector: 'iv-voice-mail-card',
  templateUrl: './voice-mail-card.component.html',
  styleUrls: ['./voice-mail-card.component.scss']
})

export class VoiceMailCardComponent extends GenericCardListComponent<IVoiceMail> implements OnInit {
  public status = VoiceMailStatus.play;
  public statuses = VoiceMailStatus;

  constructor(public router: Router) { 
    super(router, EntityRoutes.VoiceMail);
  }

  ngOnInit() { }
}