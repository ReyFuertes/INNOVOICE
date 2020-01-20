import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';

@Component({
  selector: 'iv-voice-mail-delete-dialog',
  templateUrl: './voice-mail-delete-dialog.component.html',
  styleUrls: ['./voice-mail-delete-dialog.component.scss']
})

export class VoicemailDeleteDialogComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<VoicemailDeleteDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() { }
}