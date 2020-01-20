import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { FormGroup } from '@angular/forms';
import { VoicemailConfigDialogComponent } from 'src/app/shared/dialogs/voice-mail-config-dialog/voice-mail-config-dialog.component';

@Component({
  selector: 'iv-voice-mail-dtmf',
  templateUrl: './voice-mail-dtmf.component.html',
  styleUrls: ['./voice-mail-dtmf.component.scss']
})

export class VoiceMailDTMFComponent implements OnInit {
  @Input()
  public form: FormGroup;
  public nums: Array<{ text: string, active: boolean }> = [
    {
      text: '1',
      active: true
    },
    {
      text: '2',
      active: true
    },
    {
      text: '3',
      active: true
    }, {
      text: '4',
      active: true
    }, {
      text: '5',
      active: true
    }, {
      text: '6',
      active: false
    }, {
      text: '7',
      active: false
    }, {
      text: '8',
      active: false
    }, {
      text: '9',
      active: false
    }, {
      text: '*',
      active: false
    }, {
      text: '0',
      active: false
    }, {
      text: '#',
      active: false
    }
  ]

  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  public showConfigDialog(): void {
    const dialogRef = this.dialog.open(VoicemailConfigDialogComponent, {
      width: '480px',
      height: '368px',
      data: { form: this.form }
    });
    dialogRef.afterClosed().subscribe(result => {
    });
  }
}