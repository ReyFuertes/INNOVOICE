import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'iv-voice-mail-delivery',
  templateUrl: './voice-mail-delivery.component.html',
  styleUrls: ['./voice-mail-delivery.component.scss']
})

export class VoiceMailDeliveryComponent implements OnInit {
  @Input()
  public form: FormGroup;
  constructor() { }

  ngOnInit() { }
}