import { NgModule } from '@angular/core';
import { VoicemailConfigDialogComponent } from './voice-mail-config-dialog/voice-mail-config-dialog.component';
import { MatDialogModule, MatInputModule } from '@angular/material';
import { SharedModule } from '../shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VoicemailDeleteDialogComponent } from './voice-mail-delete-dialog/voice-mail-delete-dialog.component';
import { VoicemailUploadDialogComponent } from './voice-mail-upload-dialog/voice-mail-upload-dialog.component';

@NgModule({
  imports: [
    MatDialogModule, 
    MatInputModule, 
    FlexLayoutModule, 
    SharedModule
  ],
  exports: [
    VoicemailConfigDialogComponent,
    VoicemailDeleteDialogComponent,
    VoicemailUploadDialogComponent],
  declarations: [
    VoicemailConfigDialogComponent, 
    VoicemailDeleteDialogComponent,
    VoicemailUploadDialogComponent],
  entryComponents: [
    VoicemailConfigDialogComponent, 
    VoicemailDeleteDialogComponent,
    VoicemailUploadDialogComponent],
  providers: [],
})
export class IvDialogModule { }
