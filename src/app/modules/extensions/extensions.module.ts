import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ExtensionsContainerComponent } from './container/extensions-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule, MatButtonToggleModule, MatMenuModule, MatExpansionModule, MatDialogModule } from '@angular/material';
import { ExtensionListComponent } from './components/extension-list/extension-list.component';
import { ExtensionCardComponent } from './components/extension-card/extension-card.component';
import { HttpClientModule } from '@angular/common/http';
import { ExtentionPageComponent } from './components/extension-page/extension-page.component';
import { ExtensionPageDetailComponent } from './components/extension-page-detail/extension-page-detail.component';
import { ExtensionGeneralComponent } from './components/extension-general/extension-general.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ExtensionIdentityComponent } from './components/extension-identity/extension-identity.component';
import { ExtensionPreferencesComponent } from './components/extension-preferences/extension-preferences.component';
import { CallForwardingComponent } from './components/call-forwarding/call-forwarding.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ExtensionReducer } from './store/extension.reducer';
import { ExtensionEffects } from './store/extension.effect';
import { ExtensionsService } from './services/extensions.service';
import { ExtensionEditComponent } from './components/extension-edit/extension-edit.component';
import { ExtensionAddComponent } from './components/extension-add/extension-add.component';

const materialModules = [
  MatCardModule,
  MatMenuModule,
  MatExpansionModule,
  MatDialogModule
];

const routes: Routes = [
  {
    path: '',
    component: ExtensionsContainerComponent,
    children: [
      {
        path: '',
        component: ExtentionPageComponent
      },
      {
        path: 'add',
        component: ExtensionAddComponent
      },
      {
        path: ':id/edit',
        component: ExtensionEditComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    ExtensionsContainerComponent,
    ExtensionListComponent,
    ExtensionCardComponent,
    ExtentionPageComponent,
    ExtensionPageDetailComponent,
    ExtensionGeneralComponent,
    ExtensionIdentityComponent,
    ExtensionPreferencesComponent,
    CallForwardingComponent,
    ExtensionEditComponent,
    ExtensionAddComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ...materialModules,
    RouterModule.forChild(routes),
    StoreModule.forFeature('extension', ExtensionReducer),
    EffectsModule.forFeature([ExtensionEffects])
  ],
  exports: [],
  providers: [
    ExtensionsService
  ],
})
export class ExtensionModule { }