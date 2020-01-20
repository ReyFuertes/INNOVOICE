import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material';
import { VoicemailDeleteDialogComponent } from 'src/app/shared/dialogs/voice-mail-delete-dialog/voice-mail-delete-dialog.component';
import { FormGroup } from '@angular/forms';
import { VoicemailUploadDialogComponent } from 'src/app/shared/dialogs/voice-mail-upload-dialog/voice-mail-upload-dialog.component';

@Component({
  selector: 'iv-voice-mail-greetings',
  templateUrl: './voice-mail-greetings.component.html',
  styleUrls: ['./voice-mail-greetings.component.scss']
})

export class VoicemailGreetingsComponent implements OnInit {
  @Input()
  public isDisabled: boolean = false;
  @Input()
  public form: FormGroup;
  constructor(public dialog: MatDialog) { }

  ngOnInit() { }

  public onDelete(item: string): void {
    const dialogRef = this.dialog.open(VoicemailDeleteDialogComponent, {
      width: '480px',
      height: '368px',
      data: { item }
    });
    dialogRef.afterClosed().subscribe(res => {
      if(res){
        
      }
    });
  }
  public expandPanel(pnl: any): void {
    event.stopPropagation(); 
    if(this.isEventDialog) {
      pnl.expanded = true;
    } else {
      pnl.expanded = pnl.expanded;
    }
  }
  public isEventDialog: boolean = false;
  public showUploadDialog(pnl: any): void {
    this.isEventDialog = true;
    const dialogRef = this.dialog.open(VoicemailUploadDialogComponent, {
      width: '480px',
      height: '368px',
    });
    dialogRef.afterClosed().subscribe(result => {});
  }
}