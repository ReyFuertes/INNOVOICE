import { NgModule } from '@angular/core';
import { UserContainerComponent } from './container/user-container.component';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatCardModule, MatButtonToggleModule, MatMenuModule, MatExpansionModule } from '@angular/material';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './components/user-card/user-card.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserPageComponent } from './components/user-page/user-page.component';
import { UserPageEditComponent } from './components/user-page-edit/user-page-edit.component';
import { UserGeneralComponent } from './components/user-general/user-general.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { UserReducer } from './store/user.reducer';
import { UserEffects } from './store/user.effect';

const materialModules = [
  MatCardModule,
  MatButtonToggleModule,
  MatMenuModule,
  MatExpansionModule
];

const routes: Routes = [
  {
    path: '',
    component: UserContainerComponent,
    children: [
      {
        path: '',
        component: UserPageComponent
      },
      {
        path: ':id/edit',
        component: UserPageEditComponent
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
    StoreModule.forFeature('user', UserReducer),
    EffectsModule.forFeature([UserEffects])
  ],
  exports: [],
  declarations: [
    UserContainerComponent,
    UserComponent,
    UserListComponent,
    UserPageComponent,
    UserPageEditComponent,
    UserGeneralComponent
  ],
  providers: [UserService],
})
export class UserModule { }
