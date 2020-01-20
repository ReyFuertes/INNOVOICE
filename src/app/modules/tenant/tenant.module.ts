import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TenantContainerComponent } from './container/tenant-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule, MatTabsModule, MatDividerModule, MatListModule } from '@angular/material';
import { TenantCardComponent } from './components/tenant-card/tenant-card.component';
import { TenantAddComponent } from './components/tenant-add/tenant-add.component';
import { ContentComponent } from './components/content/content.component';
import { StepDetailComponent } from './components/step-detail/step-detail.component';
import { StepSummaryComponent } from './components/step-summary/step-summary.component';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { DnsSettingComponent } from './components/dns-setting/dns-setting.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { TenantService } from './service/tenant.service';
import { HttpClientModule } from '@angular/common/http';
import { TenantEffects } from './store/tenant.effect';
import { TenantReducer } from './store/tenant.reducer';

const materialModules = [
  MatCardModule,
  MatTabsModule,
  MatDividerModule,
  MatListModule
];

const routes: Routes = [
  {
    path: '',
    component: TenantContainerComponent,
    children: [
      {
        path: '',
        component: TenantCardComponent
      },
      {
        path: 'add',
        component: TenantAddComponent
      },
      {
        path: 'dns-setting',
        component: DnsSettingComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    TenantContainerComponent,
    TenantCardComponent,
    TenantAddComponent,
    ContentComponent,
    StepDetailComponent,
    StepSummaryComponent,
    DnsSettingComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
    ...materialModules,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forChild(routes),
    StoreModule.forFeature('tenant', TenantReducer),
    EffectsModule.forFeature([TenantEffects])
  ],
  exports: [],
  providers: [LocalStorageService, TenantService, TenantService],
})
export class TenantModule { }