import { NgModule } from '@angular/core';
import { MatCardModule, MatButtonToggleModule, MatExpansionModule, MatMenuModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { ProvisioningContainerComponent } from './container/provisioning-container.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProvisioningCardComponent } from './components/provisioning-card/provisioning-card.component';
import { ProvisingListComponent } from './components/provisioning-list/provisioning-list.component';
import { ProvisionPageComponent } from './components/provisioning-page/provisioning-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProvisioningGeneralComponent } from './components/provisioning-general/provisioning-general.component';
import { ProvisioningPageEditComponent } from './components/provisioning-page-edit/provisioning-page-edit.component';
import { ProvisioningLinesComponent } from './components/provisioning-lines/provisioning-lines.component';
import { ProvisioningProfileComponent } from './components/provisioning-profile/provisioning-profile.component';
import { ProvisioningKeysComponent } from './components/provisioning-keys/provisioning-keys.component';
import { ProvisioningSettingsComponent } from './components/provisioning-settings/provisioning-settings.component';
import { ProvisioningService } from './provisioning.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ProvisioningReducer } from './store/provisioning.reducer';
import { ProvisioningEffects } from './store/provisioning.effect';

const materialModules = [
  MatCardModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatExpansionModule
];

const routes: Routes = [
  {
    path: '',
    component: ProvisioningContainerComponent,
    children: [
      {
        path: '',
        component: ProvisionPageComponent
      },
      {
        path: ':id/edit',
        component: ProvisioningPageEditComponent
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
    HttpClientModule,
    ReactiveFormsModule,
    ...materialModules,
    RouterModule.forChild(routes),
    StoreModule.forFeature('provisioning', ProvisioningReducer),
    EffectsModule.forFeature([ProvisioningEffects])
  ],
  exports: [],
  declarations: [
    ProvisioningContainerComponent,
    ProvisioningCardComponent,
    ProvisingListComponent,
    ProvisionPageComponent,
    ProvisioningPageEditComponent,
    ProvisioningGeneralComponent,
    ProvisioningLinesComponent,
    ProvisioningProfileComponent,
    ProvisioningKeysComponent,
    ProvisioningSettingsComponent
  ],
  providers: [ProvisioningService],
})
export class ProvisioningModule { }
