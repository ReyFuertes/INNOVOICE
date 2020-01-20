import { NgModule } from '@angular/core';
import { FollowMeContainerComponent } from './container/follow-me-container.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule, MatButtonToggleModule, MatExpansionModule, MatMenuModule, MatDialogModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { FollowMeCardComponent } from './components/follow-me-card/follow-me-card.component';
import { FollowMeListComponent } from './components/follow-me-list/follow-me-list.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FollowMeEffects } from './store/follow-me.effect';
import { FollowMeReducer } from './store/follow-me.reducer';
import { FollowMePageComponent } from './components/follow-me-page/follow-me-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const materialModules = [
  MatCardModule,
  MatMenuModule,
  MatExpansionModule,
  MatDialogModule
];

const routes: Routes = [
  {
    path: '',
    component: FollowMeContainerComponent,
    children: [
      {
        path: '',
        component: FollowMePageComponent
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
    ...materialModules,
    RouterModule.forChild(routes),
    StoreModule.forFeature('followMe', FollowMeReducer),
    EffectsModule.forFeature([FollowMeEffects])
  ],
  exports: [],
  declarations: [
    FollowMeContainerComponent,
    FollowMeCardComponent,
    FollowMeListComponent,
    FollowMePageComponent
  ],
  providers: [],
})
export class FollowMeModule { }
