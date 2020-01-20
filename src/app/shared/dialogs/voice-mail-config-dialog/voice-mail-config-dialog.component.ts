import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'iv-voice-mail-config-dialog',
  templateUrl: './voice-mail-config-dialog.component.html',
  styleUrls: ['./voice-mail-config-dialog.component.scss']
})

export class VoicemailConfigDialogComponent implements OnInit {
  @Input()
  public form: FormGroup;
  
  constructor(public dialogRef: MatDialogRef<VoicemailConfigDialogComponent>) { }

  ngOnInit() { }
}