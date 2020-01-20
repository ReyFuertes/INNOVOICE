import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ResellerContainerComponent } from './container/reseller-container.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule, MatTabsModule, MatDividerModule, MatListModule } from '@angular/material';
import { ResellerCardComponent } from './components/reseller-card/reseller-card.component';
import { ResellerAddComponent } from './components/reseller-add/reseller-add.component';
import { ContentComponent } from './components/content/content.component';
import { StepDetailComponent } from './components/step-detail/step-detail.component';
import { StepSummaryComponent } from './components/step-summary/step-summary.component';
import { LocalStorageService } from 'src/app/services/localStorage.service';
import { DnsSettingComponent } from './components/dns-setting/dns-setting.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { ResellerService } from './service/reseller.service';
import { HttpClientModule } from '@angular/common/http';
import { ResellerEffects } from './store/reseller.effect';
import { ResellerReducer } from './store/reseller.reducer';

const materialModules = [
  MatCardModule,
  MatTabsModule,
  MatDividerModule,
  MatListModule
];

const routes: Routes = [
  {
    path: '',
    component: ResellerContainerComponent,
    children: [
      {
        path: '',
        component: ResellerCardComponent
      },
      {
        path: 'add',
        component: ResellerAddComponent
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
    ResellerContainerComponent,
    ResellerCardComponent,
    ResellerAddComponent,
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
    StoreModule.forFeature('reseller', ResellerReducer),
    EffectsModule.forFeature([ResellerEffects])
  ],
  exports: [],
  providers: [LocalStorageService, ResellerService],
})
export class ResellerModule { }