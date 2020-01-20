import { Component, OnInit, Input } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IVoiceMail } from '../../models/voice-mail.model';
import { GenericCardListComponent } from 'src/app/generics/generic-card-list';
import { Router } from '@angular/router';
import { EntityRoutes } from 'src/app/generics/generic.enum';

@Component({
  selector: 'iv-voice-mail-list',
  templateUrl: './voice-mail-list.component.html',
  styleUrls: ['./voice-mail-list.component.scss']
})

export class VoiceMailListComponent extends GenericCardListComponent<IVoiceMail> implements OnInit {
  @Input()
  public isDisabled: boolean = false;
  constructor(public router: Router) {
    super(router, EntityRoutes.VoiceMail);
   }

  ngOnInit() { }
}