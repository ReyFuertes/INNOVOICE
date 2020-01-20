import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { DistributorContainerComponent } from './container/distributor-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule, MatTabsModule, MatDividerModule, MatListModule } from '@angular/material';
import { DistributorCardComponent } from './components/distributor-card/distributor-card.component';
import { DistributorAddComponent } from './components/distributor-add/distributor-add.component';
import { ContentComponent } from './components/content/content.component';
import { StepDetailComponent } from './components/step-detail/step-detail.component';
import { StepSummaryComponent } from './components/step-summary/step-summary.component';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { DnsSettingComponent } from './components/dns-setting/dns-setting.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { DistributorReducer } from './store/distributor.reducer';
import { EffectsModule } from '@ngrx/effects';
import { DistributorEffects } from './store/distributor.effect';
import { DistributorsService } from './service/distributor.service';
import { HttpClientModule } from '@angular/common/http';

const materialModules = [
  MatCardModule,
  MatTabsModule,
  MatDividerModule,
  MatListModule
];

const routes: Routes = [
  {
    path: '',
    component: DistributorContainerComponent,
    children: [
      {
        path: '',
        component: DistributorCardComponent
      },
      {
        path: 'add',
        component: DistributorAddComponent
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
    DistributorContainerComponent,
    DistributorCardComponent,
    DistributorAddComponent,
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
    StoreModule.forFeature('distributor', DistributorReducer),
    EffectsModule.forFeature([DistributorEffects])
  ],
  exports: [],
  providers: [LocalStorageService, DistributorsService],
})
export class DistributorModule { }