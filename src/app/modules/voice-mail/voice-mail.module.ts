import { NgModule } from '@angular/core';
import { VoiceMailCardComponent } from './components/voice-mail-card/voice-mail-card.component';
import { VoiceMailContainerComponent } from './container/voice-mail-container.component';
import { MatCardModule, MatButtonToggleModule, MatExpansionModule, MatMenuModule, MatDialogModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { VoiceMailListComponent } from './components/voice-mail-list/voice-mail-list.component';
import { VoicemailPageComponent } from './components/voice-mail-page/voice-mail-page.component';
import { VoicemailPageEditComponent } from './components/voice-mail-page-edit/voice-mail-page-edit.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { IvDialogModule } from 'src/app/shared/dialogs/dialogs.module';
import { VoicemailGreetingsComponent } from './components/voice-mail-greetings/voice-mail-greetings.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { VoiceMailReducer } from './store/reducers/voice-mail.reducer';
import { VoiceMailEffects } from './store/effects/voice-mail.effect';
import { VoiceMailAddComponent } from './components/voice-mail-add/voice-mail-add.component';
import { VoiceMailPageDetailComponent } from './components/voice-mail-page-detail/voice-mail-page-detail.component';
import { VoiceMailGeneralComponent } from './components/voice-mail-general/voice-mail-general.component';
import { VoiceMailDeliveryComponent } from './components/voice-mail-delivery/voice-mail-delivery.component';
import { VoiceMailDTMFComponent } from './components/voice-mail-dtmf/voice-mail-dtmf.component';

const primeNgModules = [
  DialogModule
];

const materialModules = [
  MatCardModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatExpansionModule,
  MatDialogModule
];

const routes: Routes = [
  {
    path: '',
    component: VoiceMailContainerComponent,
    children: [
      {
        path: '',
        component: VoicemailPageComponent
      },
      {
        path: ':id/edit',
        component: VoicemailPageEditComponent
      }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    IvDialogModule,
    ...materialModules,
    ...primeNgModules,
    RouterModule.forChild(routes),
    StoreModule.forFeature('voiceMail', VoiceMailReducer),
    EffectsModule.forFeature([VoiceMailEffects])
  ],
  exports: [],
  declarations: [
    VoiceMailDTMFComponent,
    VoiceMailDeliveryComponent,
    VoiceMailGeneralComponent,
    VoiceMailAddComponent,
    VoiceMailPageDetailComponent,
    VoiceMailContainerComponent,
    VoiceMailCardComponent,
    VoiceMailListComponent,
    VoicemailPageComponent,
    VoicemailPageEditComponent,
    VoicemailGreetingsComponent
  ],
  providers: [],
})
export class VoiceMailModule { }
