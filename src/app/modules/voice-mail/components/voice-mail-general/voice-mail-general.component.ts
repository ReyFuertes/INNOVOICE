import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'iv-voice-mail-general',
  templateUrl: './voice-mail-general.component.html',
  styleUrls: ['./voice-mail-general.component.scss']
})

export class VoiceMailGeneralComponent implements OnInit {
  @Input()
  public form: FormGroup;
  constructor() { }

  ngOnInit() { }
}