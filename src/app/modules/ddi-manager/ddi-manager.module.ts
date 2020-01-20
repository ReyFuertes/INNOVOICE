import { NgModule } from '@angular/core';
import { DdiManagerContainerComponent } from './container/ddi-manager-container.component';
import { MatCardModule, MatButtonToggleModule, MatMenuModule, MatExpansionModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { FollowMeContainerComponent } from '../follow-me/container/follow-me-container.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { DdiManagerCardComponent } from './components/ddi-manager-card/ddi-manager-card.component';
import { DdiManagerPageDetailComponent } from './components/ddi-manager-page-detail/ddi-manager-page-detail.component';
import { DdiManagerPageComponent } from './components/ddi-manager-page/ddi-manager-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { DdiManagerListComponent } from './components/ddi-manager-list/ddi-manager-list.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { DdiManagerReducer } from './store/ddi-manager.reducer';
import { DdiManagerEffects } from './store/ddi-manager.effect';
import { DdiManagerAddComponent } from './components/ddi-manager-add/ddi-manager-add.component';
import { DdiManagerEditComponent } from './components/ddi-manager-edit/ddi-manager-edit.component';
import { InboundNumbersService } from './services/inboundnumbers.service';
import { DdiManagerGeneralComponent } from './components/ddi-manager-general/ddi-manager-general.component';
import { ManagerRoutingComponent } from './components/ddi-manager-routing/ddi-manager-routing.component';
import { DdiManagerAdvanceComponent } from './components/ddi-manager-advance/ddi-manager-advance.component';
import { DdiManagerWorkingHoursComponent } from './components/ddi-manager-working-hours/ddi-manager-working-hours.component';

const materialModules = [
  MatCardModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatExpansionModule
];

const routes: Routes = [
  {
    path: '',
    component: DdiManagerContainerComponent,
    children: [
      {
        path: '',
        component: DdiManagerPageComponent
      },{
        path: 'add',
        component: DdiManagerAddComponent
      },
      {
        path: ':id/edit',
        component: DdiManagerEditComponent
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
    StoreModule.forFeature('ddiManager', DdiManagerReducer),
    EffectsModule.forFeature([DdiManagerEffects]),
    RouterModule.forChild(routes)
  ],
  exports: [],
  declarations: [
    DdiManagerContainerComponent,
    DdiManagerCardComponent,
    DdiManagerPageDetailComponent,
    DdiManagerPageComponent,
    DdiManagerListComponent,
    DdiManagerAddComponent,
    DdiManagerEditComponent,
    DdiManagerGeneralComponent,
    ManagerRoutingComponent,
    DdiManagerAdvanceComponent,
    DdiManagerWorkingHoursComponent
  ],
  providers: [
    InboundNumbersService
  ],
})
export class DDIManagerModule { }
