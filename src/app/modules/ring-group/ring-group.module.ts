import { NgModule } from '@angular/core';
import { RingGroupContainerComponent } from './container/ring-group-container.component';
import { MatCardModule, MatButtonToggleModule, MatMenuModule, MatExpansionModule, MatCheckboxModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { RingGroupListComponent } from './components/ring-group-list/ring-group-list.component';
import { RingGroupCardComponent } from './components/ring-group-card/ring-group-card.component';
import { RingGroupPageComponent } from './components/ring-group-page/ring-group-page.component';
import { RingGroupPageDetailComponent } from './components/ring-group-page-detail/ring-group-page-detail.component';
import { RingGroupGeneralComponent } from './components/ring-group-general/ring-group-general.component';
import { RingGroupDestinationComponent } from './components/ring-group-destination/ring-group-destination.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RingGroupCallForwardingComponent } from './components/ring-group-call-forwarding/ring-group-call-forwarding.component';
import { RingGroupAdvancedComponent } from './components/ring-group-advanced/ring-group-advanced.component';
import { RingGroupService } from './services/ring-group.service';
import { RingGroupEditComponent } from './components/ring-group-edit/ring-group-edit.component';
import { StoreModule } from '@ngrx/store';
import { RingGroupReducer } from './store/ring-group.reducer';
import { RingGroupEffects } from './store/ring-group.effect';
import { EffectsModule } from '@ngrx/effects';

const materialModules = [
  MatCardModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatExpansionModule,
  MatCheckboxModule
];

const routes: Routes = [
  {
    path: '',
    component: RingGroupContainerComponent,
    children: [
      {
        path: '',
        component: RingGroupPageComponent
      },
      {
        path: ':id/edit',
        component: RingGroupEditComponent
      }
    ]
  }
];

@NgModule({
  declarations: [
    RingGroupContainerComponent,
    RingGroupListComponent,
    RingGroupCardComponent,
    RingGroupPageComponent,
    RingGroupPageDetailComponent,
    RingGroupGeneralComponent,
    RingGroupDestinationComponent,
    RingGroupCallForwardingComponent,
    RingGroupAdvancedComponent,
    RingGroupEditComponent
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    SharedModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ...materialModules,
    StoreModule.forFeature('ringGroup', RingGroupReducer),
    EffectsModule.forFeature([RingGroupEffects]),
    RouterModule.forChild(routes)
  ],
  exports: [],
  providers: [
    RingGroupService
  ],
})
export class RingGroupModule { }
