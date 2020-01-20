import { Component, OnInit, Inject, Input } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'iv-voice-mail-upload-dialog',
  templateUrl: './voice-mail-upload-dialog.component.html',
  styleUrls: ['./voice-mail-upload-dialog.component.scss']
})

export class VoicemailUploadDialogComponent implements OnInit {
  public form: FormGroup;

  constructor(private fb: FormBuilder, public dialogRef: MatDialogRef<VoicemailUploadDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) {
    this.form = this.fb.group({
      name: ['']
    });
  }

  ngOnInit() { }
}
